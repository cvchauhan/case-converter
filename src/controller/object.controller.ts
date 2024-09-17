
// Exporting the Case class
import { convertKeysToCase } from "../helper/converter";
export class CaseObj {

  static objToCamel(input: any): any {
    return convertKeysToCase(input, "camel");
  }

  static objToCapital(input: any): any {
    return convertKeysToCase(input, "capital");
  }

  static objToConstant(input: any): any {
    return convertKeysToCase(input, "constant");
  }
}

export function camel(obj: Record<string, any>): Record<string, any> {
  return CaseObj.objToCamel(obj);
}

export function capital(obj: Record<string, any>): Record<string, any> {
  return CaseObj.objToCapital(obj);
}

export function constant(
  obj: Record<string, any>
): Record<string, any> {
  return CaseObj.objToConstant(obj);
}