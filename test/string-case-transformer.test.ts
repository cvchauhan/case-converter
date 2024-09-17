// src/__tests__/string-case-transformer.test.ts
import { Case } from "../src/controller/string.controller";
import {
  dot,
  camel,
  constant,
  capital,
  isLower,
  isUpper,
  kebap,
  localeLower,
  localeUpper,
  lower
} from "../src/index";
import {
  lowerFirst,
  no,
  pascal,
  path,
  sentence,
  snake,
  sponge,
  swap,
  title,
  train,
  upper,
  upperFirst,
} from "../src/index";

describe("StringCaseTransformer", () => {
  const testString = "test string";

  it("should convert to camel case", () => {
    expect(Case.camel(testString)).toBe("testString");
    expect(camel(testString)).toBe("testString");
  });

  it("should convert to capital case", () => {
    expect(Case.capital(testString)).toBe("Test String");
    expect(capital(testString)).toBe("Test String");
  });

  it("should convert to constant case", () => {
    expect(Case.constant(testString)).toBe("TEST_STRING");
    expect(constant(testString)).toBe("TEST_STRING");
  });

  it("should convert to dot case", () => {
    expect(Case.dot(testString)).toBe("test.string");
    expect(dot(testString)).toBe("test.string");
  });

  it("should convert to no case", () => {
    expect(Case.no(testString)).toBe("test string");
    expect(no(testString)).toBe("test string");
  });

  it("should convert to pascal case", () => {
    expect(Case.pascal(testString)).toBe("TestString");
    expect(pascal(testString)).toBe("TestString");
  });

  it("should convert to path case", () => {
    expect(Case.path(testString)).toBe("test/string");
    expect(path(testString)).toBe("test/string");
  });

  it("should convert to sentence case", () => {
    expect(Case.sentence(testString)).toBe("Test string");
    expect(sentence(testString)).toBe("Test string");
  });

  it("should convert to snake case", () => {
    expect(Case.snake(testString)).toBe("test_string");
    expect(snake(testString)).toBe("test_string");
  });

  it("should convert to train case", () => {
    expect(Case.train(testString)).toBe("Test-String");
    expect(train(testString)).toBe("Test-String");
  });

  it("should convert to kebab case", () => {
    expect(Case.kebap(testString)).toBe("test-string");
    expect(kebap(testString)).toBe("test-string");
  });

  it("should convert to sponge case", () => {
    expect(Case.sponge(testString)).toBe("TeSt StRiNg");
    expect(sponge(testString)).toBe("TeSt StRiNg");
  });

  it("should convert to swap case", () => {
    expect(Case.swap(testString)).toBe("TEST STRING");
    expect(swap(testString)).toBe("TEST STRING");
  });

  it("should convert to title case", () => {
    expect(Case.title(testString)).toBe("Test String");
    expect(title(testString)).toBe("Test String");
  });

  it("should convert to upper case", () => {
    expect(Case.upper(testString)).toBe("TEST STRING");
    expect(upper(testString)).toBe("TEST STRING");
  });

  it("should convert to locale upper case", () => {
    expect(Case.localeUpper(testString, "en")).toBe("TEST STRING");
    expect(localeUpper(testString, "en")).toBe("TEST STRING");
  });

  it("should convert to lower case", () => {
    expect(Case.lower(testString)).toBe("test string");
    expect(lower(testString)).toBe("test string");
  });

  it("should convert to locale lower case", () => {
    expect(Case.localeLower(testString, "en")).toBe("test string");
    expect(localeLower(testString, "en")).toBe("test string");
  });

  it("should convert to lower first case", () => {
    expect(Case.lowerFirst(testString)).toBe("test string");
    expect(lowerFirst(testString)).toBe("test string");
  });

  it("should convert to upper first case", () => {
    expect(Case.upperFirst(testString)).toBe("Test string");
    expect(upperFirst(testString)).toBe("Test string");
  });

  it("should detect if string is upper case", () => {
    expect(Case.isUpper(testString)).toBe(false);
    expect(isUpper(testString)).toBe(false);
  });

  it("should detect if string is lower case", () => {
    expect(Case.isLower(testString)).toBe(true);
    expect(isLower(testString)).toBe(true);
  });
});
