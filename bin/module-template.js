/* $name $version $time
 * Author: $author
 * License: $license
 */

void function (global, factory) {
	'use strict'
	if (typeof require === 'function' &&
		typeof exports === 'object' && exports !== null &&
		typeof module === 'object' && module !== null
	) {
		// CommonJS Module/1.1+
		factory(require, exports, module)
	} else if (typeof define === 'function' && (define.amd || define.cmd)) {
		// AMD (simplified CommonJS wrapping) or CMD
		define(factory)
	} else {
		if (!('MY_MODULES' in global)) global.MY_MODULES = {}
		var m = global.MY_MODULES['$name'] = { exports: {} }
		factory(
			function (id) {
				return global.MY_MODULES[id].exports
			},
			m.exports, m
		)
	}
}(this, function (require, exports, module) {

'use strict'

// imports
$imports

// exports
$exports

$code

})
