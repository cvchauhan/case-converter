// index.ts

// Exporting the Case class
export class Case {
  static camel(str: string): string {
    return str
    .toLowerCase()
    .replace(/([-_\s][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', '').replace(' ', ''));
  }

  static objectToCamel(input: any): any {
    if (typeof input === 'string') {
      // Recursively process each element if it's an array
      return this.camel(input);
    } else if (Array.isArray(input)) {
      // Recursively process each element if it's an array
      return input.map((item) => Case.objectToCamel(item));
    } else if (input !== null && typeof input === 'object') {
      // Recursively process each key-value pair if it's an object
      return Object.keys(input).reduce((acc, key) => {
        const camelKey = this.camel(key);
        acc[camelKey] = input[key]; // Do not modify the value, only change the key
        if (typeof input[key] === 'object' && input[key] !== null) {
          acc[camelKey] = Case.objectToCamel(input[key]); // Recursively handle nested objects/arrays
        }
        return acc;
      }, {} as any);
    }    
  }

  static capital(str: string): string {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  static constant(str: string): string {
    return str.toUpperCase().replace(/\s+/g, "_");
  }

  static dot(str: string): string {
    return str.toLowerCase().replace(/\s+/g, ".");
  }

  static no(str: string): string {
    return str.toLowerCase();
  }

  static pascal(str: string): string {
    return str
      .toLowerCase()
      .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match) => match.toUpperCase())
      .replace(/\s+/g, "");
  }

  static path(str: string): string {
    return str.toLowerCase().replace(/\s+/g, "/");
  }

  static sentence(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  static snake(str: string): string {
    return str.toLowerCase().replace(/\s+/g, "_");
  }

  static train(str: string): string {
    return str
      .replace(/\s+/g, "-")
      .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match) => match.toUpperCase());
  }

  static kebap(str: string): string {
    return str.replace(/\s+/g, "-").toLowerCase();
  }

  static sponge(str: string): string {
    let upper = true;
    return str
      .split('')
      .map((char) => {
        if (char.match(/[a-zA-Z]/)) {
          // Only change case for alphabetic characters
          const result = upper ? char.toUpperCase() : char.toLowerCase();
          upper = !upper; // Toggle the case for the next character
          return result;
        }
        return char; // Keep non-alphabetic characters unchanged
      })
      .join('');
  }

  static swap(str: string): string {
    return str.toUpperCase();
  }

  static title(str: string): string {
    return str
      .replace(/\b\w/g, (char) => char.toUpperCase())
      .replace(/\s+/g, " ");
  }

  static upper(str: string): string {
    return str.toUpperCase();
  }

  static localeUpper(str: string, locale: string): string {
    return str.toLocaleUpperCase(locale);
  }

  static lower(str: string): string {
    return str.toLowerCase();
  }

  static localeLower(str: string, locale: string): string {
    return str.toLocaleLowerCase(locale);
  }

  static lowerFirst(str: string): string {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }

  static upperFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static isUpper(str: string): boolean {
    return str === str.toUpperCase();
  }

  static isLower(str: string): boolean {
    return str === str.toLowerCase();
  }
}

// Exporting functions directly
export function camel(str: any): any {
  return Case.objectToCamel(str);
}

export function objectToCamel(obj: Record<string, any>): Record<string, any> {
  return Case.objectToCamel(obj);
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
