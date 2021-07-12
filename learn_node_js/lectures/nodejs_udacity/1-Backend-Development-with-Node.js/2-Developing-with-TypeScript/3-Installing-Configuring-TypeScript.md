See 
5 - ND0067 FSJS C01 L02 A03 Configuring TypeScript Part 1 V1 Copy 01

TypeScript can be found on npm's website here. TypeScript can be installed locally or globally. If interested in working with TypeScript outside of a node.js project, you would install TypeScript globally to have access to the compiler globally. We will be working with TypeScript locally. To install locally, use one of the following 2 commands based on need. Again, using devDependencies when you begin working with Node.js can be helpful in learning which modules are required only for development purposes and which are required for production.

$ npm i typescript // save to dependencies
$ npm i typescript --save-dev // save to devDependencies
NPX and Creating your package.json Script
To use TypeScript, you need to add a script to your package.json file to compile TypeScript to JavaScript. This is generally called your "build" script but could be named anything.

"scripts": {
    "build": "npx tsc"
  },
npx comes packaged with npm by default. npx first checks that a package is in your project; if it is, it executes the package; if not, npx installs then executes that package. The command npx tsc in a project will transpile TypeScript to JavaScript. You can learn more about npx from the npm documentation.

To execute your "build" script use the following:

$ npm run build
Configuring TypeScript
tsconfig.json can also be named jsconfig.json.

To install the config file, run

$ npx tsc --init 
You should always check your compiler options to note what you are transpiling to as well as your output directory. Common output directory names include dist, build, prod, and server.

This config file is also where you can tell TypeScript how strict it should be while checking your code and what to ignore. If you're moving a project to TypeScript, you can gracefully integrate TS by working with the settings in this config file.

ES6 Modules
Now that we are using TypeScript for our application, we can also easily utilize the ES6 module system instead of the CommonJS module system. Destructuring should only be used when you are exporting the functions individually. If choosing to use export default, you must import the entire default as a module.

Import
For importing modules, use the following syntax

// Rename the module
import 'name' from 'module';

// Use destructuring to pull in specific functions when they are exported individually
import {function, function} from 'module';
Export
// Export an individual function or other type of object in code
export const myFunction = () => {};

// Export a single item at the end
export default object;

// Export a list of objects
export default {object1, object2};

### More TypeScript Configurations

See 6 - ND0067 FSJS C01 L02 A03 Configuring TypeScript Part 2 V1

Helpful configurations to note:
{
  "compilerOptions": {
    "target": "es5",                          
    "module": "commonjs",                     
    "lib": ["ES2018", "DOM"], 
    "outDir": "./build",                        
    "strict": true,                           
    "noImplicitAny": true,                 
  },
  "exclude": ["node_modules", "tests"]
}
You will see many more options available than what is above. Your application may require additional settings to be configured, but these are typically the main settings to start with.

target - sets what version of JS TypeScript will be transpiled to.
module - sets what module system will be used when transpiling. Node.js uses the common.js module system by default
lib - is used to say what libraries your code is using. In this case, ES2018 and the DOM API
outDir - where you want your src code to output to. Often named build, prod, or server (when using it serverside)
strict - enable strict typing
noImplicitAny - disallow the "any" type (covered in TypeScript Basics)
exclude - directories to exclude in compiling
Further Reading
Catch up on ES6 modules if you haven't had the opportunity to work with them yet.
Official documentation from Microsoft on installing TypeScript.
Explicit instructions from Microsoft on Installing TypeScript and working with NPM and a text editor.


Links 

- [x] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
- [x] Download TypeScript
- [x] https://docs.microsoft.com/en-us/visualstudio/javascript/compile-typescript-code-npm?view=vs-2019
- [x] Compile TypeScript code (Node.js)
- [x] https://www.npmjs.com/package/typescript
- [x] https://docs.npmjs.com/cli/v7/commands/npx
- [ ]   