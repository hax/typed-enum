function Enum() {

	if (arguments.length < 1) throw Error('Insufficent arguments')

	var instances = [], values = [], mappings = {}

	var MyEnum = function (name) {
		if (mappings.hasOwnProperty(name)) return mappings[name]
		else throw TypeError('invalid enum name: ' + name)
	}
	Object.defineProperties(MyEnum, {
		has: { value: function (name) { return mappings.hasOwnProperty(name) } },
	})
	var getValue = function () { return this.value }
	Object.defineProperties(MyEnum.prototype, {
		valueOf: { value: getValue },
		toJSON: { value: getValue }
	})

	function addValue(name, value) {
		if (mappings.hasOwnProperty(name)) throw Error('Duplicated enum name: ' + name)
		if (/^\s*$/.test(value)) throw Error('Empty enum value')
		var o, i = values.indexOf(value)
		if (i >= 0) o = instances[i]
		else {
			o = Object.seal(Object.create(MyEnum.prototype, {
				value: { value: value }
			}))
			values.push(value)
			instances.push(o)
		}
		mappings[name] = o
		var key = CONSTANT_CASE(name)
		MyEnum[key] = o
		return o
	}

	for (var i = 0, n = arguments.length; i < n; i++) {
		var arg = arguments[i]

		switch (typeof arg) {
			case 'string':
				addValue(arg, arg)
				break
			case 'object':
				if (arg !== null) {
					Object.keys(arg).forEach(function (key) { addValue(key, arg[key]) })
					break
				}
			default:
				throw TypeError()
		}
	}

	return Object.seal(MyEnum)
}

function CONSTANT_CASE(s) {
	return s.replace(/-|\s+/g, '_').toUpperCase()
}