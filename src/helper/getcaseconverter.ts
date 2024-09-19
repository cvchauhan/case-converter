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
      case "pascal":
        return Case.pascal;
      case "path":
        return Case.path;
      case "sentence":
        return Case.sentence;
      case "snake":
        return Case.snake;
      case "train":
        return Case.train;
      case "kebap":
        return Case.kebap;
        
      case "sponge":
        return Case.sponge;
      case "swap":
        return Case.swap;
      case "title":
        return Case.title;
      case "upper":
        return Case.upper;
      case "lower":
        return Case.lower;      
      default:
        return (str: string) => str;
    }
  }
  