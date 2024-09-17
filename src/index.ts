// index.ts

// Exporting the Case class
import { convertKeysToCase } from "./helper/converter";
import { Case } from "./controller/string.controller";
import { CaseObj } from "./controller/object.controller";
// Exporting functions directly
export function camel(str: any): any {
  return convertKeysToCase(str, "camel");
}

export function capital(str: string): string {
  return Case.capital(str);
}

export function constant(str: string): string {
  return Case.constant(str);
}

export function dot(str: string): string {
  return Case.dot(str);
}

export function no(str: string): string {
  return Case.no(str);
}

export function pascal(str: string): string {
  return Case.pascal(str);
}

export function path(str: string): string {
  return Case.path(str);
}

export function sentence(str: string): string {
  return Case.sentence(str);
}

export function snake(str: string): string {
  return Case.snake(str);
}

export function train(str: string): string {
  return Case.train(str);
}

export function kebap(str: string): string {
  return Case.kebap(str);
}

export function sponge(str: string): string {
  return Case.sponge(str);
}

export function swap(str: string): string {
  return Case.swap(str);
}

export function title(str: string): string {
  return Case.title(str);
}

export function upper(str: string): string {
  return Case.upper(str);
}

export function localeUpper(str: string, locale: string): string {
  return Case.localeUpper(str, locale);
}

export function lower(str: string): string {
  return Case.lower(str);
}

export function localeLower(str: string, locale: string): string {
  return Case.localeLower(str, locale);
}

export function lowerFirst(str: string): string {
  return Case.lowerFirst(str);
}

export function upperFirst(str: string): string {
  return Case.upperFirst(str);
}

export function isUpper(str: string): boolean {
  return Case.isUpper(str);
}

export function isLower(str: string): boolean {
  return Case.isLower(str);
}

export function objToCamel(obj: Record<string, any>): Record<string, any> {
  return CaseObj.objToCamel(obj);
}

export function objToCapital(obj: Record<string, any>): Record<string, any> {
  return CaseObj.objToCapital(obj);
}

export function objToConstant(
  obj: Record<string, any>
): Record<string, any> {
  return CaseObj.objToConstant(obj);
}
