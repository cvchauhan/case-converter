# case-converters

![npm version](https://img.shields.io/npm/v/case-converters)
![npm downloads](https://img.shields.io/npm/dm/case-converters)
![license](https://img.shields.io/npm/l/case-converters)

A comprehensive utility for converting strings and object keys between various case styles in TypeScript and JavaScript.

- Supports all popular case styles: camel, capital, constant, dot, no, pascal, path, sentence, snake, train, kebab, sponge, swap, title, upper, lower, and more.
- Works with both strings and object keys (including arrays of objects).
- ESM and CommonJS compatible.

---

## About

`case-converters` is a lightweight and flexible TypeScript/JavaScript utility that helps convert strings and object keys between multiple naming conventions.  
It's ideal for working with APIs, data formatting, or transforming data across systems with inconsistent casing styles.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [String Case Conversion](#string-case-conversion)
  - [Object Key Case Conversion](#object-key-case-conversion)
- [API Reference](#api-reference)
  - [String Methods](#string-methods)
  - [Object Key Methods](#object-key-methods)
- [Live Demo](#live-demo)
- [Links](#links)
- [License](#license)
- [Contact](#contact)

---

## Installation

```sh
npm install --save case-converters
```

---

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

---

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
  objToKebab,
  objToSponge,
  objToSwap,
  objToTitle,
  objToUpper,
  objToLower,
} = require("case-converters");

console.log(objToCamel(input));
console.log(objToCapital(input));
console.log(objToConstant(input));
```

---

## API Reference

### String Methods

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
  kebab,
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

camel(str);
capital(str);
constant(str);
dot(str);
no(str);
pascal(str);
path(str);
sentence(str);
snake(str);
train(str);
kebab(str);
sponge(str);
swap(str);
title(str);
upper(str);
localeUpper(str);
lower(str);
localeLower(str);
lowerFirst(str);
upperFirst(str);
isUpper(str);
isLower(str);
```

Or use the `Case` class:

```ts
import { Case } from "case-converters";

Case.camel(str);
Case.capital(str);
```

---

### Object Key Methods

Available functions for converting object keys:

- `objToCamel(obj)`
- `objToPascal(obj)`
- `objToSnake(obj)`
- `objToKebab(obj)`
- `objToConstant(obj)`
- `objToCapital(obj)`
- `objToTrain(obj)`
- `objToTitle(obj)`
- `objToSentence(obj)`
- `objToDot(obj)`
- `objToPath(obj)`
- `objToNot(obj)`
- `objToSponge(obj)`
- `objToSwap(obj)`
- `objToUpper(obj)`
- `objToLower(obj)`

Example:

```js
const obj = { first_name: "John", last_name: "Doe" };
console.log(objToCamel(obj));
```

---

## Live Demo

Try it online:  
👉 [StackBlitz Live Demo](https://stackblitz.com/edit/typescript-t3wjttc4?file=index.ts)

---

## Links

- **GitHub Repository:** https://github.com/cvchauhan/case-converter
- **NPM Package:** https://www.npmjs.com/package/case-converters

---

## License

ISC © Chirag Chauhan

---

## Contact

For questions, suggestions, or collaborations:

- GitHub: [@cvchauhan](https://github.com/cvchauhan)
- Email: cvchauhan.dev@gmail.com
