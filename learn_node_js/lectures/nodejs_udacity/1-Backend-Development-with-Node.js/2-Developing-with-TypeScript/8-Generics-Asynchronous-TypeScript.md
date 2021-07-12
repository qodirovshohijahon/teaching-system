### Generics and the Promise Return Type

See 14 - ND0067 FSJS C01 L02 A07 Generics And Async TypeScript V2

To fully understand how promises are typed in TypeScript, you need to understand Generics. A generic is a way to write a function that is reusable across different types. You may wonder, why not just use any? Well, any allows for any type to go in, and any type to come out. Using a generic means a number goes in and a number comes out or a string goes in and a string comes out.

Generics introduce the Type Variable. Rather than being a variable that accepts values, it's a variable that accepts types and is denoted with angle brackets myFunc<T>. It's common to see a capital T being used at the type in the generic to denote the use of a type.

// Typed Function
const getItem = (arr: number[]):number => {
  return arr[1];
}

// Generic Function
const getItem = <T>(arr: T[]):T => {
  return arr[1];
};
In the first function, we have a function that takes in a number array and outputs the second number of the array. But what if we don't want to work with numbers? What if we want to work with strings? Well, we would need to create a second function. Or, we can use a generic, and whatever type we use when we call the function will translate to its return as well.

Using Generic Functions
Implicit typing

getItem([1, 2, 3]); // Implicity typed as number 
Explicit typing

getItem<number>([1,2,3]); // Explicitly typed as a number
So where does this leave us with Promises? You may or may not have noticed this, but when working with Promises, Promises is capitalized and it uses the new keyword to create one new Promise. That means that Promise is actually a constructor function (or class if using post ES6 terminology). Promises are built-in objects that have their own properties and methods.

The return type of an asynchronous function using async/await syntax is always a Promise. Promises in TypeScript take advantage of generics. This means we can explicitly state what type of Promise should be returned.

const myFunc = async ():Promise<void> => { // do stuff };

### Asynchronous TypeScript
#### Promise Chaining VS Async/Await
See 15 - ND0067 FSJS C01 L02 A08 Async Return Types Part 1 V2

This demo looks at how an asynchronous function that uses a Promise constructor can be typed, taking advantage of the code editors IntelliSense to guide the TypeScript process.

With a function that returns a Promise, use the generic type variable to state what type of Promise should be returned. Promise<number>

This example types the function arguments (step) as unknown via IntelliSense's recommendation requiring the use of type assertion when step is used in order for TypeScript to safely type the nextStep variable. Since nextStep is resolved as a number, the function returns a Promise of type number.

Rather than typing step as unknown, it would have been possible to type step as number, avoiding the need for type assertion later on. IntelliSense is very helpful and will likely give you an accurate option for the type, but it doesn't mean you can't do a better job.


See 16 - ND0067 FSJS C01 L02 A08 Async Return Types Part 2 V1

Once we have our functions typed, we can then look at our Promise chain to type our callback arguments. In the case of this demonstration, we know the result should be typed as a number.

For our Async/Await syntax, we're able to type our functions the same way. Once we reach our async/await syntax, we're able to give the function a return type. We know that async/await syntax always returns a Promise. In this case, it returns a Promise since there is no return statement.

Trying to add a return statement once the return type has been declared as void results in IntelliSense prompting an error that 'number' is not assignable to type 'void'.

New Terms
Term	Definition
Generic	A generic is a way to write a function that is reusable across different types
Further Reading
A guide to generics in TypeScript from Log Rocket: Getting Started With TypeScript Generics.

A tutorial on writing generics from Digital Ocean: How to Use Generics in TypeScript.

Links
- [x] https://blog.logrocket.com/getting-started-with-typescript-generics/
- [x] https://www.digitalocean.com/community/tutorials/typescript-generics-in-typescript