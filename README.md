# case-converters

A comprehensive utility for converting strings and object keys between various case styles in TypeScript and JavaScript.

- Supports all popular case styles: camel, capital, constant, dot, no, pascal, path, sentence, snake, train, kebab, sponge, swap, title, upper, lower, and more.
- Works with both strings and object keys (including arrays of objects).
- ESM and CommonJS compatible.

## Installation

```sh
npm install --save case-converters
```

## Usage

### String Case Conversion

#### CommonJS

```js
const { camel, upper } = require("case-converters");

console.log(camel("test string")); // testString
console.log(upper("test string")); // TEST STRING
```

#### ES Modules / TypeScript

```ts
import { Case } from "case-converters";

console.log(Case.camel("test string")); // testString
console.log(Case.upper("test string")); // TEST STRING
```

### Object Key Case Conversion

Convert all keys in an object or array of objects to a specific case style.

```js
const input = [{ user_name: "Alice" }, { user_name: "Bob" }];

const {
  objToCamel,
  objToCapital,
  objToConstant,
  objToNot,
  objToPascal,
  objToPath,
  objToSentence,
  objToSnake,
  objToTrain,
  objToKebap,
  objToSponge,
  objToSwap,
  objToTitle,
  objToUpper,
  objToLower,
} = require("case-converters");

console.log(objToCamel(input));
// [
//   { userName: 'Alice' },
//   { userName: 'Bob' }
// ]

console.log(objToCapital(input));
// [
//   { UserName: 'Alice' },
//   { UserName: 'Bob' }
// ]

console.log(objToConstant(input));
// [
//   { USERNAME: 'Alice' },
//   { USERNAME: 'Bob' }
// ]
```

### API Reference

#### String Methods

You can use either the `Case` class or direct function imports:

```ts
import {
  camel,
  capital,
  constant,
  dot,
  no,
  pascal,
  path,
  sentence,
  snake,
  train,
  kebap,
  sponge,
  swap,
  title,
  upper,
  localeUpper,
  lower,
  localeLower,
  lowerFirst,
  upperFirst,
  isUpper,
  isLower,
} from "case-converters";

const str = "test string";

camel(str); // testString
capital(str); // Test String
constant(str); // TEST_STRING
dot(str); // test.string
no(str); // test string
pascal(str); // TestString
path(str); // test/string
sentence(str); // Test string
snake(str); // test_string
train(str); // Test-String
kebap(str); // test-string
sponge(str); // TeSt StRiNg
swap(str); // TEST STRING
title(str); // Test String
upper(str); // TEST STRING
localeUpper(str, "en"); // TEST STRING
lower(str); // test string
localeLower(str, "en"); // test string
lowerFirst(str); // test string
upperFirst(str); // Test string
isUpper(str); // false
isLower(str); // true
```

Or use the `Case` class:

```ts
import { Case } from "case-converters";

Case.camel(str);
Case.capital(str);
// ...and so on
```

#### Object Key Methods

All object key conversion methods accept either an object or an array of objects.

- `objToCamel`
- `objToCapital`
- `objToConstant`
- `objToNot`
- `objToDot`
- `objToPascal`
- `objToPath`
- `objToSentence`
- `objToSnake`
- `objToTrain`
- `objToKebap`
- `objToSponge`
- `objToSwap`
- `objToTitle`
- `objToUpper`
- `objToLower`

Example:

```js
const obj = { first_name: "John", last_name: "Doe" };
console.log(objToCamel(obj)); // { firstName: 'John', lastName: 'Doe' }
```

## Links

- **Original project:** https://github.com/cvchauhan/case-converter

## License

ISC © Chirag Chauhan

## Contact

-
