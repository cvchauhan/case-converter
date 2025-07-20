// index.ts

import { convertKeysToCase } from "./helper/converter";
import { Case } from "./controller/string.controller";
import { CaseObj } from "./controller/object.controller";

// ----------------------
// Primitive string functions
// ----------------------

const stringCaseMap: Record<string, (str: string, ...args: any[]) => any> = {
  camel: (str) => convertKeysToCase(str, "camel"),
  capital: Case.capital,
  constant: Case.constant,
  dot: Case.dot,
  no: Case.no,
  pascal: Case.pascal,
  path: Case.path,
  sentence: Case.sentence,
  snake: Case.snake,
  train: Case.train,
  kebap: Case.kebap,
  sponge: Case.sponge,
  swap: Case.swap,
  title: Case.title,
  upper: Case.upper,
  lower: Case.lower,
  localeUpper: Case.localeUpper,
  localeLower: Case.localeLower,
  lowerFirst: Case.lowerFirst,
  upperFirst: Case.upperFirst,
  isUpper: Case.isUpper,
  isLower: Case.isLower,
};

export const {
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
  lower,
  localeUpper,
  localeLower,
  lowerFirst,
  upperFirst,
  isUpper,
  isLower,
} = stringCaseMap;

// ----------------------
// Object conversion functions
// ----------------------

const objCaseMap: Record<
  string,
  (obj: Record<string, any>) => Record<string, any>
> = {
  objToCamel: CaseObj.objToCamel,
  objToCapital: CaseObj.objToCapital,
  objToConstant: CaseObj.objToConstant,
  objToNot: CaseObj.objToNot,
  objToDot: CaseObj.objToDot,
  objToPascal: CaseObj.objToPascal,
  objToPath: CaseObj.objToPath,
  objToSentence: CaseObj.objToSentence,
  objToSnake: CaseObj.objToSnake,
  objToTrain: CaseObj.objToTrain,
  objToKebap: CaseObj.objToKebap,
  objToSponge: CaseObj.objToSponge,
  objToSwap: CaseObj.objToSwap,
  objToTitle: CaseObj.objToTitle,
  objToUpper: CaseObj.objToUpper,
  objToLower: CaseObj.objToLower,
};

export const {
  objToCamel,
  objToCapital,
  objToConstant,
  objToNot,
  objToDot,
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
} = objCaseMap;
