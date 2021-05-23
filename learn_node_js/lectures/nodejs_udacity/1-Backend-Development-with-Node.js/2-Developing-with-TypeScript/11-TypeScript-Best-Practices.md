Dos and Don'ts with TypeScripts
See 22 - ND0067 FSJS C01 L02 A10 TypeScript Best Practices Review V1

Use strong checks to prevent developer errors
One way to do this is to use noImplicitAny in tsconfig.json to prevent errors created by Typescript assuming Any type.
Turn on all strict checking by setting strict to true in your tsconfiig.json settings.
Pay attention to when to use Implicit vs Explicit typing
const

Typing: Implicit
Value is immutable so type can't be changed
let

Typing: Explicit
Value and type can be changed
Function with controlled inputs

Typing: Implicit
Output is controlled and code is simpler
Single-line arrow function

Typing: Implicit
Simpler code
Longer function

Typing: Explicit
Easier to read
Use the Latest EcmaScript Features
TypeScript is great at staying up to date with what's available in EcmaScript, just make sure to check which version of TypeScript is in use for your project.

QUIZ QUESTION
Which of the following is not ideal for using implicit typing?




Further Reading
TypeScripts official Do's and Don'ts documentation.

Microsoft's guide to performant TypeScript.

Links 
- [x] https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html
- [x] https://github.com/microsoft/TypeScript/wiki/Performance

