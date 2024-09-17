// src/__tests__/string-case-transformer.test.ts
import { objToCamel, objToCapital, objToConstant } from '../src/index';
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
  it('should convert to camel case', () => {
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
  
  it('should convert to capital case', () => {
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

  it('should convert to constant case', () => {
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

  // it('should convert to dot case', () => {
  //   expect(Case.dot(testString)).toBe('test.string');
  // });

  // it('should convert to no case', () => {
  //   expect(Case.no(testString)).toBe('test string');
  // });

  // it('should convert to pascal case', () => {
  //   expect(Case.pascal(testString)).toBe('TestString');
  // });

  // it('should convert to path case', () => {
  //   expect(Case.path(testString)).toBe('test/string');
  // });

  // it('should convert to sentence case', () => {
  //   expect(Case.sentence(testString)).toBe('Test string');
  // });

  // it('should convert to snake case', () => {
  //   expect(Case.snake(testString)).toBe('test_string');
  // });

  // it('should convert to train case', () => {
  //   expect(Case.train(testString)).toBe('Test-String');
  // });

  // it('should convert to kebab case', () => {
  //   expect(Case.kebap(testString)).toBe('test-string');
  // });

  // it('should convert to sponge case', () => {
  //   expect(Case.sponge(testString)).toBe('TeSt StRiNg');
  // });

  // it('should convert to swap case', () => {
  //   expect(Case.swap(testString)).toBe('TEST STRING');
  // });

  // it('should convert to title case', () => {
  //   expect(Case.title(testString)).toBe('Test String');
  // });

  // it('should convert to upper case', () => {
  //   expect(Case.upper(testString)).toBe('TEST STRING');
  // });

  // it('should convert to locale upper case', () => {
  //   expect(Case.localeUpper(testString, 'en')).toBe('TEST STRING');
  // });

  // it('should convert to lower case', () => {
  //   expect(Case.lower(testString)).toBe('test string');
  // });

  // it('should convert to locale lower case', () => {
  //   expect(Case.localeLower(testString, 'en')).toBe('test string');
  // });

  // it('should convert to lower first case', () => {
  //   expect(Case.lowerFirst(testString)).toBe('test string');
  // });

  // it('should convert to upper first case', () => {
  //   expect(Case.upperFirst(testString)).toBe('Test string');
  // });

  // it('should detect if string is upper case', () => {
  //   expect(Case.isUpper(testString)).toBe(false);
  // });

  // it('should detect if string is lower case', () => {
  //   expect(Case.isLower(testString)).toBe(true);
  // });
});
