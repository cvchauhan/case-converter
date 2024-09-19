// src/__tests__/string-case-transformer.test.ts
import { objToCamel, objToCapital, objToConstant, objToNot, objToDot,objToPath,  objToKebap, objToTrain} from '../src/index';
import { objToSponge, objToSwap, objToTitle, objToUpper, objToLower, objToPascal, objToSentence, objToSnake } from '../src/index';
import { CaseObj } from '../src/controller/object.controller';

describe('CaseObj', () => {
  const inputObj = {
    'first_name': 'John',
    'last_name': 'Doe',
    'address_details': {
      'street_name': 'Main Street',
      'city_name': 'New York'
    },
    'full name': 'John Doe'
  };
  it('should convert obj key to camel case', () => {
    const expectedOutput = {
      firstName: 'John',
      lastName: 'Doe',
      addressDetails: {
        streetName: 'Main Street',
        cityName: 'New York'
      },
      fullName: 'John Doe'
    };
    expect(CaseObj.objToCamel(inputObj)).toEqual(expectedOutput);
    expect(objToCamel(inputObj)).toEqual(expectedOutput);
  });
  test('should handle an array of objects and convert only the keys', () => {
    const inputArray = [
      { 'user_name': 'Alice' },
      { 'user_name': 'Bob' }
    ];

    const expectedOutput = [
      { userName: 'Alice' },
      { userName: 'Bob' }
    ];
    
    expect(CaseObj.objToCamel(inputArray)).toEqual(expectedOutput);
    expect(objToCamel(inputArray)).toEqual(expectedOutput);
  });
  
  it('should convert obj key to capital case', () => {
    const inputArray = [
      { 'user_name': 'Alice' },
      { 'user name': 'Alice' },
      { 'username': 'Bob' }
    ];

    const expectedOutput = [
      { User_name: 'Alice' },
      { "User Name": 'Alice' },
      { Username: 'Bob' }
    ];
    
    expect(objToCapital(inputArray)).toEqual(expectedOutput);
    expect(CaseObj.objToCapital(inputArray)).toEqual(expectedOutput);
  });

  it('should convert obj key to constant case', () => {
    const inputArray = [
      { 'user_name': 'Alice' },
      { 'user name': 'Alice' },
      { 'username': 'Bob' }
    ];

    const expectedOutput = [
      { USER_NAME: 'Alice' },
      { USER_NAME: 'Alice' },
      { USERNAME: 'Bob' }
    ];
    const output = {
      'FIRST_NAME': 'John',
      'LAST_NAME': 'Doe',
      'ADDRESS_DETAILS': {
        'STREET_NAME': 'Main Street',
        'CITY_NAME': 'New York'
      },
      'FULL_NAME': 'John Doe'
    };
    expect(objToConstant(inputObj)).toEqual(output);    
    expect(CaseObj.objToConstant(inputArray)).toEqual(expectedOutput);    
  });

  it('should convert obj key to dot case', () => {
    const inputArray = [
      { 'user_name': 'Alice' },
      { 'user name': 'Bob' }
    ];   
    const expectedOutput = [
      { "user.name": 'Alice' },
      { "user.name": 'Bob' }
    ];
    expect(CaseObj.objToDot(inputArray)).toEqual(expectedOutput);
    expect(objToDot(inputArray)).toEqual(expectedOutput);
  });

  it('should convert obj key to no case', () => {
    const inputArray = [
      { 'user_name': 'Alice' },
      { 'user_name': 'Bob' }
    ];   
    expect(CaseObj.objToNot(inputArray)).toEqual(inputArray);
    expect(objToNot(inputArray)).toEqual(inputArray);
  });

  it('should convert obj key to pascal case', () => {
    const inputArray = [
      { 'user name': 'Alice' },
      { 'user_name': 'Bob' }
    ];
    const expectedOutput = [
      { "UserName": 'Alice' },
      { "UserName": 'Bob' }
    ];
    expect(CaseObj.objToPascal(inputArray)).toEqual(expectedOutput);
    expect(objToPascal(inputArray)).toEqual(expectedOutput);
  });

  it('should convert obj key to path case', () => {
    const inputArray = [
      { 'user name': 'Alice' },
      { 'user_name': 'Bob' }
    ];
    const expectedOutput = [
      { "user/name": 'Alice' },
      { "user/name": 'Bob' }
    ];
    expect(objToPath(inputArray)).toEqual(expectedOutput);
    expect(CaseObj.objToPath(inputArray)).toEqual(expectedOutput);
  });

  it('should convert obj key to sentence case', () => {
    const inputArray = [
      { 'user name': 'Alice' },
      { 'user_name': 'Bob' }
    ];
    const expectedOutput = [
      { "User name": 'Alice' },
      { "User_name": 'Bob' }
    ];
    expect(objToSentence(inputArray)).toEqual(expectedOutput);
    expect(CaseObj.objToSentence(inputArray)).toEqual(expectedOutput);
  });

  it('should convert obj key to snake case', () => {
    const inputArray = [
      { 'user name': 'Alice' },
      { 'user_name': 'Bob' }
    ];
    const expectedOutput = [
      { "user_name": 'Alice' },
      { "user_name": 'Bob' }
    ];
    expect(CaseObj.objToSnake(inputArray)).toEqual(expectedOutput);
    expect(objToSnake(inputArray)).toEqual(expectedOutput);
  });

  it('should convert obj key to train case', () => {
    const inputObject = { 'user name': 'Alice' };
    const expectedOutput = { "User-Name": 'Alice' }     
    expect(CaseObj.objToTrain(inputObject)).toEqual(expectedOutput);
    expect(objToTrain(inputObject)).toEqual(expectedOutput);
  });

  it('should convert obj key to kebab case', () => {
    const inputArray = [
      { 'user name': 'Alice' },
      { 'user name': 'Bob' }
    ];
    const expectedOutput = [
      { "user-name": 'Alice' },
      { "user-name": 'Bob' }
    ];
    expect(CaseObj.objToKebap(inputArray)).toEqual(expectedOutput);
    expect(objToKebap(inputArray)).toEqual(expectedOutput);
  });

  it('should convert obj key to sponge case', () => {
    const inputArray = [
      { 'user name': 'Alice' },
      { 'user name': 'Bob' }
    ];
    const expectedOutput = [
      { "UsEr NaMe": 'Alice' },
      { "UsEr NaMe": 'Bob' }
    ];
    expect(CaseObj.objToSponge(inputArray)).toEqual(expectedOutput);
    expect(objToSponge(inputArray)).toEqual(expectedOutput);
  });

  it('should convert obj key to swap case', () => {
    const inputArray = [
      { 'user name': 'Alice' },
      { 'user name': 'Bob' }
    ];
    const expectedOutput = [
      { "USER NAME": 'Alice' },
      { "USER NAME": 'Bob' }
    ];
    expect(CaseObj.objToSwap(inputArray)).toEqual(expectedOutput);
    expect(objToSwap(inputArray)).toEqual(expectedOutput);
  });

  it('should convert obj key to title case', () => {
    const inputArray = [
      { 'user name': 'Alice' },
      { 'user name': 'Bob' }
    ];
    const expectedOutput = [
      { "User Name": 'Alice' },
      { "User Name": 'Bob' }
    ];
    expect(CaseObj.objToTitle(inputArray)).toEqual(expectedOutput);
    expect(objToTitle(inputArray)).toEqual(expectedOutput);
  });

  it('should convert obj key to upper case', () => {
    const inputArray = [
      { 'user name': 'Alice' },
      { 'user name': 'Bob' }
    ];
    const expectedOutput = [
      { "USER NAME": 'Alice' },
      { "USER NAME": 'Bob' }
    ];
    expect(objToUpper(inputArray)).toEqual(expectedOutput);
    expect(CaseObj.objToUpper(inputArray)).toEqual(expectedOutput);
  });

  it('should convert obj key to lower case', () => {
    const inputArray = [
      { "USER NAME": 'Alice' },
      { "USER NAME": 'Bob' }
    ];
    const expectedOutput = [      
      { 'user name': 'Alice' },
      { 'user name': 'Bob' }
    ];
    expect(objToLower(inputArray)).toEqual(expectedOutput);
    expect(CaseObj.objToLower(inputArray)).toEqual(expectedOutput);
  });
});
