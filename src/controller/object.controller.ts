
// Exporting the Case class
import { convertKeysToCase } from "../helper/converter";
export class CaseObj {
  static objToCamel = (input: any): Function => convertKeysToCase(input, "camel");
  static objToCapital = (input: any): Function => convertKeysToCase(input, "capital");
  static objToConstant = (input: any): Function => convertKeysToCase(input, "constant");
  static objToNot = (input: any): Function => convertKeysToCase(input, "not");
  static objToDot = (input: any): Function => convertKeysToCase(input, "dot");
  static objToPascal = (input: any): Function => convertKeysToCase(input, "pascal");
  static objToPath = (input: any): Function => convertKeysToCase(input, "path");
  static objToSentence = (input: any): Function => convertKeysToCase(input, "sentence");
  static objToSnake = (input: any): Function => convertKeysToCase(input, "snake");
  static objToTrain = (input: any): Function => convertKeysToCase(input, "train");
  static objToKebap = (input: any): Function => convertKeysToCase(input, "kebap");
  static objToSponge = (input: any): Function => convertKeysToCase(input, "sponge");
  static objToSwap = (input: any): Function => convertKeysToCase(input, "swap");
  static objToTitle = (input: any): Function => convertKeysToCase(input, "title");
  static objToUpper = (input: any): Function => convertKeysToCase(input, "upper");
  static objToLower = (input: any): Function => convertKeysToCase(input, "lower"); 
}