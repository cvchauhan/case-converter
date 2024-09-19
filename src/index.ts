// index.ts

// Exporting the Case class
import { convertKeysToCase } from "./helper/converter";
import { Case } from "./controller/string.controller";
import { CaseObj } from "./controller/object.controller";
// Exporting functions directly
export const camel = (str: any): any => convertKeysToCase(str, "camel");
export const capital = (str: string): string => Case.capital(str);
export const constant = (str: string): string => Case.constant(str);
export const dot = (str: string): string => Case.dot(str);
export const no = (str: string): string => Case.no(str);
export const pascal = (str: string): string => Case.pascal(str);
export const path = (str: string): string => Case.path(str);
export const sentence = (str: string): string => Case.sentence(str);
export const snake = (str: string): string => Case.snake(str);
export const train = (str: string): string => Case.train(str);
export const kebap = (str: string): string => Case.kebap(str);
export const sponge = (str: string): string => Case.sponge(str);
export const swap = (str: string): string => Case.swap(str);
export const title = (str: string): string => Case.title(str);
export const upper = (str: string): string => Case.upper(str)
export const localeUpper = (str: string, locale: string): string => Case.localeUpper(str, locale);
export const lower = (str: string): string => Case.lower(str);
export const localeLower = (str: string, locale: string): string => Case.localeLower(str, locale);
export const lowerFirst = (str: string): string => Case.lowerFirst(str);
export const upperFirst = (str: string): string => Case.upperFirst(str);
export const isUpper = (str: string): boolean => Case.isUpper(str);
export const isLower = (str: string): boolean => Case.isLower(str);

/**
 * 
 * @param obj 
 * @returns Converted object
 */
export const objToCamel = (obj: Record<string, any>): Record<string, any> => CaseObj.objToCamel(obj);
export const objToCapital = (obj: Record<string, any>): Record<string, any> => CaseObj.objToCapital(obj);
export const objToConstant = (obj: Record<string, any>): Record<string, any> => CaseObj.objToConstant(obj);
export const objToNot = (obj: Record<string, any>): Record<string, any> => CaseObj.objToNot(obj);
export const objToDot = (obj: Record<string, any>): Record<string, any> => CaseObj.objToDot(obj);
export const objToPascal = (obj: Record<string, any>): Record<string, any> => CaseObj.objToPascal(obj);
export const objToPath = (obj: Record<string, any>): Record<string, any> => CaseObj.objToPath(obj);
export const objToSentence = (obj: Record<string, any>): Record<string, any> => CaseObj.objToSentence(obj);
export const objToSnake = (obj: Record<string, any>): Record<string, any> => CaseObj.objToSnake(obj);
export const objToTrain = (obj: Record<string, any>): Record<string, any> => CaseObj.objToTrain(obj);
export const objToKebap = (obj: Record<string, any>): Record<string, any> => CaseObj.objToKebap(obj);
export const objToSponge = (obj: Record<string, any>): Record<string, any> => CaseObj.objToSponge(obj);
export const objToSwap = (obj: Record<string, any>): Record<string, any> => CaseObj.objToSwap(obj);
export const objToTitle = (obj: Record<string, any>): Record<string, any> => CaseObj.objToTitle(obj);
export const objToUpper = (obj: Record<string, any>): Record<string, any> => CaseObj.objToUpper(obj);
export const objToLower = (obj: Record<string, any>): Record<string, any> => CaseObj.objToLower(obj);


