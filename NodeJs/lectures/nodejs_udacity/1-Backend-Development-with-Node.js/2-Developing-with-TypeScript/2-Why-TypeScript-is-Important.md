See
2 - ND0067 FSJS C01 L02 A02 Why TypeScript Is Important Part 1 V1

Typing exists in most languages. It adds an attribute to the thing being typed that has rules on how it can be used. It prevents coder errors like trying to pass in a string to a function using arithmetic operators.

Types are applied to:

variables
function parameters
function returns
object values.
Types can be implemented by developers or inferred by compilers.

JavaScript is Weakly-Typed.
This means that types are assigned by the interpreter based on the data and makes an educated guess when the code's intention is ambiguous. This can lead to unintended results.

Example:

2 + '2' = '22' 
TypeScript Adds Typing to JavaScript
In short, TypeScript is a static and strong typed superset of JavaScript. When we're done with our TypeScript code, it compiles to JavaScript.

TypeScript may not be needed if you have a lot of code quality measures in place. Still, with how easy it is to learn and implement, it's generally worth it to reduce coder errors, and TypeScript offers the developer the ability to state their intentions clearly.

### When To Use TypeScript

Play Video
See 3 - ND0067 FSJS C01 L02 A02 Why TypeScript Is Important Part 2 V1

TypeScript Isn't Needed If You Have...
You have a strong Test-driven development process
You do frequent code reviews
The project has thorough documentation
You use a well-configured IDE that automatically lints your code to surface errors
But even in those cases, why not use TypeScript? As you'll learn, using TypeScript isn't a huge lift, and it can be a big help in reducing developer error.

TypeScript Is A MUST for Large or Growing Teams!
As a project/team grows larger, the room for errors in the development flow grows.

TypeScript is a way to reduce developer error efficiently
Typing is familiar to developers who have worked with strictly typed languages like Java, C#, and C++
TypeScript is easy to learn
Thousands of Apps Use TypeScript
Thousands of Apps Use TypeScript

Used in popular front-end frameworks including Angular, React and Vue
Supported by all major IDEs and code editors including Visual Studio Code, Sublime and Atom
Resolving Errors With TypeScript
Play Video
Intellisense Hinting
As you can see from the demonstration above, an additional benefit of using TypeScript in an editor with TypeScript (native or extended) support is the hinting you receive from the editor (IntelliSense with VScode). You're not left waiting for the compile script to run; you're told while you type. In the exercises you complete in the workspaces, you will not have live hinting; you will need to compile to see your errors.

QUIZ QUESTION
Which of these is not an advantage using TypeScript?





New Terms
Term	Definition
Compile	Convert code from one language to another language with a different level of abstraction. Ex. Java to Machine Code.
Strong-Typed	Types are important and require declarations. Steps need to be taken to change variables to different types
Transpile	Convert a language to a similarly abstracted language. Ex. ES6 to ES5
Weak-Typed	Types aren't declared and in some cases mixed and concatenated.
;