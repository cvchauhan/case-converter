import { convertKeysToCase } from "../helper/converter";

type CaseType =
  | "camel"
  | "capital"
  | "constant"
  | "not"
  | "dot"
  | "pascal"
  | "path"
  | "sentence"
  | "snake"
  | "train"
  | "kebap"
  | "sponge"
  | "swap"
  | "title"
  | "upper"
  | "lower";

export class CaseObj {
  private static createMethod(caseType: CaseType) {
    return (
      input: Record<string, unknown> | Record<string, unknown>[]
    ): Record<string, unknown> | Record<string, unknown>[] =>
      convertKeysToCase(input, caseType) as
        | Record<string, unknown>
        | Record<string, unknown>[];
  }

  static objToCamel = this.createMethod("camel");
  static objToCapital = this.createMethod("capital");
  static objToConstant = this.createMethod("constant");
  static objToNot = this.createMethod("not");
  static objToDot = this.createMethod("dot");
  static objToPascal = this.createMethod("pascal");
  static objToPath = this.createMethod("path");
  static objToSentence = this.createMethod("sentence");
  static objToSnake = this.createMethod("snake");
  static objToTrain = this.createMethod("train");
  static objToKebap = this.createMethod("kebap");
  static objToSponge = this.createMethod("sponge");
  static objToSwap = this.createMethod("swap");
  static objToTitle = this.createMethod("title");
  static objToUpper = this.createMethod("upper");
  static objToLower = this.createMethod("lower");
}
