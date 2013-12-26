test('Enum basic usage', function(){

	var Sex = Enum('male', 'female')

	assert( Sex.MALE instanceof Sex )
	assert( Sex.FEMALE instanceof Sex )

	assert( Sex.MALE.value === 'male' )
	assert( Sex.FEMALE.value === 'female' )

	assert( Sex.MALE == 'male' )
	assert( Sex.FEMALE == 'female' )

	assert( JSON.stringify(Sex.MALE) === '"male"' )
	assert( JSON.stringify(Sex.FEMALE) === '"female"' )

	assert( Sex.has('male') )
	assert( Sex.has('female') )
	assert( !Sex.has('foo') )

	assert( Sex('male') === Sex.MALE )
	assert( Sex('female') === Sex.FEMALE )
})

test('Enum constructor(...[string])', function(){

	var AB = Enum('a', 'b')

	assert( AB('a') instanceof AB )
	assert( AB('a') !== AB('b') )
	assert( AB('b').value === 'b' )
	assert( AB.A === AB('a') )
	assert( AB.B === AB('b') )
	assert( AB.A == 'a' )
	assert( AB.B == 'b' )
	assert( AB.has('a') )
	assert( AB.has('b') )
	assert( !AB.has('foo') )
})

test('Enum constructor(Object)', function(){

	var ABC = Enum({
		a: 1, b: 2, c: 4, ac: 5
	})
	assert( typeof ABC === 'function' )
	assert( ABC('a') instanceof ABC )
	assert( ABC('b').value === 2 )
	assert( ABC.C === ABC('c') )
	assert( ABC.A == 1 )
	assert( ABC.A | ABC.C == ABC.AC )
})

test('Enum constants', function(){

	var Case = Enum(
		'lowercase', 'UPPERCASE', 
		'snake_case', 'dash-case',
		'space case'
	)
	assert( Case.LOWERCASE == 'lowercase')
	assert( Case.UPPERCASE == 'UPPERCASE')
	assert( Case.SNAKE_CASE == 'snake_case')
	assert( Case.DASH_CASE == 'dash-case')
	assert( Case.SPACE_CASE == 'space case')
})

test('Enum sealed', function(){

	var Test = Enum('hello')

	assert( Object.isSealed(Test) )
	assert( Object.isSealed(Test.HELLO) )
})