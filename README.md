# typed-enum

  Enum Factory in Typed JavaScript.

  [![Build Status](https://travis-ci.org/hax/typed-enum.png)](https://travis-ci.org/hax/typed-enum)
  [![NPM version](https://badge.fury.io/js/typed-enum.png)](http://badge.fury.io/js/typed-enum)

## Install
```sh
npm install typed-enum
```

## Usage

### Import
### Bower

#### CommonJS (Node.js), AMD (RequireJS), CMD (Sea.js)
```sh
bower install typed-enum
```
```JavaScript
var Enum = require('typed-enum/dist/enum.min.js')
```

#### Naked script
```html
<script src='typed-enum/dist/enum.min.js'></script>
<script>
var Enum = MY_MODULES['typed-enum'].exports
</script>
```

### API

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
