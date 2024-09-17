import { Case } from "../controller/string.controller";

export function getCaseConverter(caseType: string): (str: string) => string {
    switch (caseType.toLowerCase()) {
      case "camel":
        return Case.camel;
      case "capital":
        return Case.capital;
      case "constant":
        return Case.constant;
      case "dot":
        return Case.dot;
      default:
        return (str: string) => str;
    }
  }
  