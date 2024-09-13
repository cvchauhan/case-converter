# case-converter

Change case functions for all cases in TypeScript and JavaScript.
Combined version of all [`case-converter`](https://github.com/cvchauhan/case-converter) methods, so you do not need to install them separately.
ESM and CJS bundles are included, also backwards compatible with case-converter@1.0.0.

`case-converter@1.0.0` which can be used to access all methods.

## Usage

```shell script
npm install --save case-converter
```
#### javascript

```javascript

const { camel, upper } from 'case-converter';
camel('test string'); // testString
upper('test string'); // TEST STRING
```

### Browser / ESM
```ts
import { Case } from 'case-converter';
const camel = Case.camel('test string'); // testString
const upper = Case.upper('test string'); // TEST STRING


import { camel, upper, ... } from 'case-converter';
const camel = camel('test string'); // testString
const upper = upper('test string'); // TEST STRING
```

### Node.js
```ts
const { Case } = require('case-converter');
const camel = Case.camel('foo-bar'); // fooBar
const snake = Case.snake('fooBar'); // foo_bar

const { camel, snake } = require('case-converter');
const camel = camel('foo-bar'); // fooBar
const snake = snake('fooBar'); // foo_bar
```

## Links

- **Original project:** https://github.com/cvchauhan/case-converter

## Methods

### Class based usage
```ts
import { Case } from 'case-converter';

const str = 'test string';

camel       = Case.camel(str);               // testString
capital     = Case.capital(str);             // Test String
constant    = Case.constant(str);            // TEST_STRING
dot         = Case.dot(str);                 // test.string
no          = Case.no(str);                  // test string
pascal      = Case.pascal(str);              // TestString
path        = Case.path(str);                // test/string
sentence    = Case.sentence(str);            // Test string
snake       = Case.snake(str);               // test_string
train       = Case.train(str);               // Test-String
kebab       = Case.kebab(str);               // test-string
sponge      = Case.sponge(str);              // TeSt StRiNg
swapCase    = Case.swap(str);                // TEST STRING
title       = Case.title(str);               // Test String
uppper      = Case.upper(str);               // TEST STRING
localeUpper = Case.localeUpper(str, 'en');   // TEST STRING
lower       = Case.lower(str);               // test string
localeLower = Case.localeLower(str, 'en');   // test string
lowerFirst  = Case.lowerFirst(str);          // test string
upperFirst  = Case.upperFirst(str);          // Test string
isUpper     = Case.isUpper(str);             // false
isLower     = Case.isLower(str);             // true
```

### Function based usage
```ts
import { camel, upper, ... } from 'case-converter';

const str = 'test string';

camel       = camel(str);               // testString
capital     = capital(str);             // Test String
constant    = constant(str);            // TEST_STRING
dot         = dot(str);                 // test.string
no          = no(str);                  // test string
pascal      = pascal(str);              // TestString
path        = path(str);                // test/string
sentence    = sentence(str);            // Test string
snake       = snake(str);               // test_string
train       = train(str);               // Test-String
kebab       = kebab(str);               // test-string
sponge      = sponge(str);              // TeSt StRiNg
swap        = swap(str);                // TEST STRING
title       = title(str);               // Test String
uppper      = upper(str);               // TEST STRING
localeUpper = localeUpper(str, 'en');   // TEST STRING
lower       = lower(str);               // test string
localeLower = localeLower(str, 'en');   // test string
lowerFirst  = lowerFirst(str);          // test string
upperFirst  = upperFirst(str);          // Test string
isUpper     = isUpper(str);             // false
isLower     = isLower(str);             // true
```

## Meta

* chiragvchauhan93@gmail.com