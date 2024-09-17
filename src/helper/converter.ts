import { getCaseConverter } from "./getcaseconverter";

export function convertKeysToCase(input: any, caseType: string): any {
  const caseConverter = getCaseConverter(caseType);
  if (typeof input === "string") {
    // Recursively process each element if it's an array
    return caseConverter(input);
  } else if (Array.isArray(input)) {
    // Recursively process each element if it's an array
    return input.map((item) => convertKeysToCase(item, caseType));
  } else if (input !== null && typeof input === "object") {
    // Recursively process each key-value pair if it's an object
    return Object.keys(input).reduce((acc, key) => {
      const changeKey = caseConverter(key);
      acc[changeKey] = input[key]; // Do not modify the value, only change the key
      if (typeof input[key] === "object" && input[key] !== null) {
        acc[changeKey] = convertKeysToCase(input[key], caseType); // Recursively handle nested objects/arrays
      }
      return acc;
    }, {} as any);
  }
}
