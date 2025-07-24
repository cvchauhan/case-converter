# case-converters

![npm version](https://img.shields.io/npm/v/case-converters)
![npm downloads](https://img.shields.io/npm/dm/case-converters)
![license](https://img.shields.io/npm/l/case-converters)

> ⚠️ **Not to be confused with the deprecated [`case-converter`](https://www.npmjs.com/package/case-converter).**  
> ✅ `case-converters` is a modern, actively maintained package with full **TypeScript support**, robust **object key transformation**, and support for 15+ **string casing styles**.

---

`case-converters` is a lightweight yet powerful utility to convert strings and object keys into a wide range of naming conventions — like `camelCase`, `PascalCase`, `snake_case`, `kebab-case`, `Train-Case`, `SpongeCase`, and more.

- ✔ Supports **string** and **object key** transformation
- ✔ Works with **arrays of objects** too
- ✔ ESM & CommonJS compatible
- ✔ 100% written in **TypeScript**

---

## 🔧 Installation

```bash
npm install case-converters
```

---

## 📦 Supported Case Styles

- `camel`, `pascal`, `snake`, `kebab`, `constant`, `dot`, `path`, `title`, `sentence`, `capital`, `train`
- `sponge`, `swap`, `upper`, `lower`, `no`, `localeUpper`, `localeLower`, `lowerFirst`, `upperFirst`
- And many more...

---

## 🚀 Quick Usage

### 🔹 String Case Conversion

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

### 🔹 Object Key Case Conversion

Convert keys of an object (or array of objects):

```js
const { objToCamel, objToPascal } = require("case-converters");

const input = [{ user_name: "Alice" }, { user_name: "Bob" }];

console.log(objToCamel(input));
console.log(objToPascal(input));
```

---

## 📘 API Reference

### 🔹 String Methods

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
pascal(str);
snake(str);
// ...
```

Or use the class style:

```ts
import { Case } from "case-converters";

Case.kebab(str);
Case.title(str);
```

---

### 🔹 Object Key Methods

Available functions:

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

## 🌐 Live Demo

Try it online:  
👉 [StackBlitz Live Demo](https://stackblitz.com/edit/typescript-t3wjttc4?file=index.ts)

---

## 🔗 Links

- 🧠 **GitHub**: [cvchauhan/case-converter](https://github.com/cvchauhan/case-converter)
- 📦 **npm**: [case-converters](https://www.npmjs.com/package/case-converters)

---

## 📄 License

ISC © [Chirag Chauhan](https://github.com/cvchauhan)

---

## 📬 Contact

For questions, suggestions, or collaborations:

- GitHub: [@cvchauhan](https://github.com/cvchauhan)
- Email: [chiragvchauhan93@gmail.com](mailto:chiragvchauhan93@gmail.com)
