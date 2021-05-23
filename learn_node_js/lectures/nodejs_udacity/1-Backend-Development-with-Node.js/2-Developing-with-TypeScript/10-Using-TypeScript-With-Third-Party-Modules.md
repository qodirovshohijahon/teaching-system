Third-Party Type Definitions

See 19 - ND0067 FSJS C01 L02 A09 Getting TypeScript To Play Nice Part 1 V2

In general, most packages found on npmjs.com have type definitions that can be installed in addition to the package. Typically searching the name of the package followed by types will locate the type definitions, or you can simply try running npm i --save-dev @types/packageName which will often work.

Type definitions are increasingly created by the creators of the package, but it's also common for them to be created by third parties and maintained by the open source community. So it's possible that type definitions could be outdated, missing specific functions, or were never created in the first place.

### Using Types With Third-Party Modules
See 20 - ND0067 FSJS C01 L02 A09 Getting TypeScript To Play Nice Part 2 V1

In the example above, we can see that we are accessing functions available to us from the lodash library. If you're unfamiliar with lodash, it is a library for performing various functions on arrays, numbers, strings, and other data. When using an editor with IntelliSense abilities, we are able to easily see the types used in lodash.

Navigating to the node_modules/@types/lodash folder we can see all of the definitions for the lodash library.

In the following example, we can see that the dropRight function uses a generic to allow for use of an array of any type.

// dropRight in use 
// dropRight takes in an array and then the amount of numbers to drop as arguments
console.log(_.dropRight([1, 2, 3, 4, 5], 2));
console.log(_.dropRight(['cat', 'dog', 'rabbit', 'horse'], 1));

// dropRight type definition
dropRight<T>(array: List<T> | null | undefined, n?: number): T[];
Thinking Like a TypeScript Developer
Visit https://www.npmjs.com/ and locate type definitions for node. Visit the GitHub repository listed and copy in an interface, class, or generic that's being used for any one of Node.js's core modules.

### Using Third-Party Modules Without Type Definitions
See 21 - ND0067 FSJS C01 L02 A12 Edge Cases V2

You may run into some situations where there the third-party modules don't have any definitions. TypeScript will still run as expected, you can just expect it to compile with errors. It's best practice to add type definitions, so if you ever run into a situation where the types aren't defined, you can simply create them to reduce errors when compiling.

To Create Type Definitions When One Is Missing:
Create a types folder in your root directory with a subfolder specifically for 3rdparty types.
Create a file in your 3rdparty folder called index.d.ts (it could be a more specific name than index).
Within your definitions file, import the node module with the missing definition.
Use the declare keyword to declare which module the definition will before followed by curly braces to contain the definition.
Write the definition which will likely be a class or an interface for a function. It's common to see interfaces for function since the function is actually defined elsewhere.
Open tsconfig.json and find //"typeRoots": ,. Uncomment the line and update it to include your new types directory. "typeRoots": ["./types"],
The function should then be useable in your code.
import _ from 'lodash';

declare module 'lodash' {
  interface LoDashStatic {
    multiply(multiplier: number, multiplicand: number): number;
  }
}
New Terms
Term	Definition
lodash	A popular library for performing utility functions for things like arrays and numbers
Further Reading
Checkout Definitely Typed, the largest online repository for type definitions for the most popular NPM packages.

Search TypeScript's site for packages with definitions or for packages that have definitions on Definitely Typed.

Links
- [x] https://lodash.com/
- [x] https://definitelytyped.org/
- [x] https://www.typescriptlang.org/dt/search?search=
- [x]