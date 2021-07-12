See 10 - ND0067 FSJS C01 L02 A05 Object Like Types V1
Arrays are critical data structures to JavaScript, so it makes sense that with TypeScript, there are multiple ways of creating them depending on the content that goes inside. TypeScript offers 2 ways of working with arrays and a third that can feel more like an array or an object depending on how it is used.

Array - to type as an array, use the type, followed by square brackets. Union types can be used to allow for multiple types in an array.

let arr: string[]; // only accepts strings
let arr2: (string | number)[]; // accepts strings or numbers
Tuple - tuples are not native to JavaScript. When you know exactly what data will be in the array, and you will not be adding to the array or modifying the type for any value, you can use a tuple.

let arr: [string, number, string]; // ['cat', 7, 'dog']
enum - enums are not native to JavaScript but are similar to enumeration used in other languages like C++ and Java. You use an enum when you have a constant set of values that will not be changed. By default, the values in an enum are also given a numeric value starting at 0. However, the numeric value can manually be set to any number explicitly or by calculation. Uses PascalCase to name the type.

enum Weekend {
  Friday,
  Saturday,
  Sunday
}
### Working With Objects in TypeScript

See 11 - ND0067 FSJS C01 L02 A06 Object Oriented TypeScript Part 1 V2

Objects and Interfaces
Objects are easily created in JavaScript due to JavaScript's weak typing. With TypeScript, they take a bit more work. It is possible to create an object in TypeScript, but TypeScript offers better tools for doing so.

Object - creating an object requires defining the object before setting values. Once you have defined the object, additional properties cannot be added to the type definition, making it unhelpful when you need to add more properties after creation.

let student:{ name: string, age: number, enrolled: boolean} = {name: 'Maria', age: 10, enrolled: true};
interface - Interfaces are a concept not native to javascript, but similar concepts exist in other languages like Java, C++, and Python, where you create an abstract class as an interface for creating classes. With TypeScript, interfaces are simply used as the blueprint for the shape of something. Interfaces can be used to create functions but are most commonly seen to create objects.

Interfaces have the ability to be added too without the need to be extended. Meaning, if you have an interface, you can declare that interface a second time and add additional properties to it. This allows you to easily work with third-party interfaces that may need additional properties.

Use PascalCase for naming interfaces.

interface Student { 
  name: string, 
  age: number, 
  enrolled: boolean
};
let newStudent:Student = {name: 'Maria', age: 10, enrolled: true};
Duck Typing
Duck Typing is a programming concept that tests if an object meets the duck test: "If it walks like a duck and it quacks like a duck, then it must be a duck."

TypeScript uses duck typing for interfaces, meaning that even though you may say a function takes in an argument of interface A, if interface B has the same properties of A, it will also accept B. Interface A is the duck, and Interface B walks and quacks like a duck, so we'll accept it as a duck too.

Optional and Readonly Properties
Typescript gives the ability to create both optional and read-only properties when working with object-like data.

Optional - use when an object may or may not have a specific property by adding a ? at the end of the property name.

interface Student { 
  name: string, 
  age: number, 
  enrolled: boolean,
  phone?: number // phone becomes optional
};
readonly - use when a property should not be able to be modified after the object has been created. Keep in mind that this will only produce TypeScript errors and that the actual properties can still technically be changed as read-only does not exist in JavaScript. The closest thing in JavaScript is Object.freeze which will make all properties of the object unable to be modified.
interface Student { 
  name: string, 
  age: number, 
  enrolled: boolean,
  readonly id: number // id is readonly
};
Type Aliases, TypeScript Classes and Factory Functions

See 12 - ND0067 FSJS C01 L02 A06 Object Oriented TypeScript Part 2 V2


Type Aliases
Type aliases do not create a new type; they rename a type. Therefore, you can use it to type an object and give it a descriptive name. But like the object type, once a type alias is created, it can not be added to; it can only be extended. Meaning, if you wanted to create an object from a type alias and then a second with additional properties, you would need to extend the type alias and make your second object with the extended alias. This makes interfaces the preferred method for creating objects.

Type aliases become very useful when you would like a shorthand for something like a specific union type or a tuple with a specific meaning. For example, if I needed to create multiple arrays of coordinates, I could create a tuple that accepts 2 numbers, call it Coordinate and create multiple arrays of type Coordinate.

type Student = { 
  name: string; 
  age: number;
  enrolled: boolean;
};

let newStudent:Student = {name: 'Maria', age: 10, enrolled: true};
Classes
TypeScript classes look and behave very much like the classes introduced in ES6. A class in programming is made up of member variables and member functions/methods. The same goes for TypeScript, with the big difference being our variables (properties) are typed, as are the parameters and return types for our constructor and methods.

class Student {
  studentGrade: number;
  studentId: number;
  constructor(grade: number, id: number) {
    this.studentGrade = grade;
    this.studentId = id;
  }
}
Access Modifiers
The biggest addition to TypeScript classes is the addition of access modifiers. Access modifiers are used in most object-oriented programming languages to declare how accessible a variable should be.

public - by default, all properties of a TypeScript class are public, and it's commonplace to leave off the modifier to denote that it's public. Public properties can be accessed outside of the class.

private - private properties can only be accessed and modified from the class itself. TypeScript uses the keyword private, but you can also use the # symbol now available for privatizing fields in EcmaScript. Remember that private properties are only private in TypeScript; there are no true private properties in JavaScript classes, so a private property can still be changed if you ignore the error.

protected - protected properties can be accessed by the class itself and child classes.

class Student {
  protected studentGrade: number;
  private studentId: number;
  public constructor(grade: number, id: number) {
    this.studentGrade = grade;
    this.studentId = id;
  }
  id(){
    return this.studentId;
  }
}

class Graduate extends Student {
  studentMajor: string; // public by default
  public constructor(grade: number, id: number, major: string ){
      super(grade, id);
      this.studentId = id; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
      this.studentGrade = grade; // Accessable because parent is protected
      this.studentMajor = major;
  }
}

const myStudent = new Graduate(3, 1234, 'computer science');

console.log(myStudent.id()); //  prints 1234
myStudent.studentId = 1235; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
console.log(myStudent.id()); // prints 1235
Factory Functions
If Factory Functions remain your preferred way of creating JavaScript objects, they are still useable within TypeScript. To create a factory function with explicit typing, create an interface with the object's properties and methods and use the interface as the return type for the function.

interface Student {
  name: string;
  age: number
  greet(): void;
}

const studentFactory = (name: string, age: number): Student =>{ 
  const greet = ():void => console.log('hello'); 
  return { name, age, greet };
}

const myStudent = studentFactory('Hana', 16);

Further Reading
More information on working with classes and objects in TypeScript from SitePen. Advanced TypeScript 4.0 Concepts: Classes and Types.

New Terms
Term	Definition
Access Modifier	Used in classes to declare how a property or method can be accessed from the application
Duck typing	A programming paradigm where if two or more structures (functions, interfaces, objects) have the same properties, they can be used interchangeably regardless of any type declarations
Enumerated type	A set of constants that are automatically indexed and can be called by their name or index
Interface	Used as a blueprint to declare the shape of something reuseable such as functions, objects, and classes
Tuple	A data type of an array with a set number of values where all value types are known

Links 
- [x] https://www.sitepen.com/blog/advanced-typescript-concepts-classes-and-types