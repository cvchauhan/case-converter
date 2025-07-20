import { getCaseConverter } from "./getcaseconverter";

export function convertKeysToCase(input: unknown, caseType: string): unknown {
  const caseConverter = getCaseConverter(caseType);

  if (typeof input === "string") {
    return caseConverter(input);
  }

  if (Array.isArray(input)) {
    return input.map((item) => convertKeysToCase(item, caseType));
  }

  if (input !== null && typeof input === "object") {
    return Object.entries(input as Record<string, unknown>).reduce(
      (acc, [key, value]) => {
        const changedKey = caseConverter(key);

        // Only recursively convert if value is object or array
        if (typeof value === "object" && value !== null) {
          acc[changedKey] = convertKeysToCase(value, caseType);
        } else {
          acc[changedKey] = value;
        }

        return acc;
      },
      {} as Record<string, unknown>
    );
  }

  // If input is primitive (number, boolean, null, undefined, symbol, etc.)
  return input;
}
