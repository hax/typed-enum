# typed-enum

  Enum Factory in Typed JavaScript.

  [![Build Status](https://travis-ci.org/hax/typed-enum.png)](https://travis-ci.org/hax/typed-enum)
  [![NPM version](https://badge.fury.io/js/typed-enum.png)](http://badge.fury.io/js/typed-enum)

## Example

```JavaScript
var Sex = Enum('male', 'female')

//all expressions return true
Sex.MALE instanceof Sex && Sex.FEMALE instanceof Sex
Sex.MALE.value === 'male' && Sex.FEMALE.value === 'female'
Sex.MALE == 'male' && Sex.FEMALE == 'female'
JSON.stringify(Sex.MALE) === '"male"' && JSON.stringify(Sex.FEMALE) === '"female"'
Sex.has('male') && Sex.has('female') && !Sex.has('foo')
Sex('male') === Sex.MALE && Sex('female') === Sex.FEMALE
```

## Install

### NPM

```sh
npm install typed-enum
```

### Download

  [Download the compressed, production file](https://raw.github.com/hax/typed-enum/master/dist/enum.min.js)
  [Download the uncompressed, development file](https://raw.github.com/hax/typed-enum/master/dist/enum.min.js)
  and
  [the source map file](https://raw.github.com/hax/typed-enum/master/dist/enum.min.map)

### Bower

```sh
bower install typed-enum
```

## Usage

### CommonJS (Node.js), AMD (RequireJS), CMD (Sea.js)
```JavaScript
var Enum = require('typed-enum')
```

### Naked script
```html
<script src='path_to/enum.min.js'></script>
<script>
var Enum = MY_MODULES['typed-enum'].exports
</script>
```

