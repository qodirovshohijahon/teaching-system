#### 3.0 Objects
As we know from the chapter Data types, there are eight data types in JavaScript. Seven of them are called “primitive”, because their values contain only a single thing (be it a string or a number or whatever).

In contrast, objects are used to store keyed collections of various data and more complex entities. In JavaScript, objects penetrate almost every aspect of the language. So we must understand them first before going in-depth anywhere else.

An object can be created with figure brackets `{…}` with an optional list of properties. A property is a `“key: value”` pair, where key is a string (also called a `“property name”`), and value can be anything.

We can imagine an object as a cabinet with signed files. Every piece of data is stored in its file by the key. It’s easy to find a file by its name or add/remove a file.


An empty object `(“empty cabinet”)` can be created using one of two syntaxes:
```js
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax
```
Usually, the figure brackets `{...}` are used. That declaration is called an object literal.

#### 3.1 Literals and properties
We can immediately put some properties into `{...}` as `“key: value”` pairs:
```js
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};
```
A property has a key (also known as `“name”` or `“identifier”`) before the colon `":"` and a value to the right of it.

**In the user object, there are two properties:**

The first property has the name `"name"` and the value `"John"`.
The second one has the name `"age"` and the value `30`.
The resulting user object can be imagined as a cabinet with two signed files labeled `“name”` and `“age”`.


We can **add, remove** and read files from it any time.

Property values are accessible using the dot notation:
```js
// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30
```
The value can be of any type. Let’s add a boolean one:

```js
user.isAdmin = true;
```

To remove a property, we can use delete operator:
```js
delete user.age;
```


We can also use **multiword property** names, but then they must be quoted:
```js
let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};
```

The last property in the list may end with a comma:
```js

let user = {
  name: "John",
  age: 30,
}
```

That is called a `“trailing” or “hanging”` comma. Makes it easier to add/remove/move around properties, because all lines become alike.

#### 3.2 Square brackets
For multiword properties, the dot access doesn’t work:
```js
// this would give a syntax error
user.likes birds = true
```
JavaScript doesn’t understand that. It thinks that we address user.likes, and then gives a syntax error when comes across unexpected birds.

The dot requires the key to be a valid variable identifier. That implies: contains no spaces, doesn’t start with a digit and doesn’t include special characters (`$` and `_` are allowed).

There’s an alternative “square bracket notation” that works with any string:
```js
let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];
```

Now everything is fine. Please note that the string inside the brackets is properly quoted (any type of quotes will do).

Square brackets also provide a way to obtain the property name as the result of any expression – as opposed to a literal string – like from a variable as follows:
```js
let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;
```
Here, the variable key may be calculated at run-time or depend on the user input. And then we use it to access the property. That gives us a great deal of flexibility.

For instance:
```js
let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key] ); // John (if enter "name")
```
The dot notation cannot be used in a similar way:
```js
let user = {
  name: "John",
  age: 30
};

let key = "name";
alert( user.key ) // undefined
```
#### 3.3 Property value shorthand
In real code we often use existing variables as values for property names.

For instance:
```js
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John
```
In the example above, properties have the same names as variables. The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter.

**Instead of name:name we can just write name, like this:**
```js
function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}
```
**We can use both normal properties and shorthands in the same object:**
```ja
let user = {
  name,  // same as name:name
  age: 30
};
```
#### 3.4 Property existence test, “in” operator
A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property. There will be no error if the property doesn’t exist!

Reading a non-existing property just returns undefined. So we can easily test whether the property exists:
```js
let user = {};
```
```js
alert( user.noSuchProperty === undefined ); // true means "no such property"
```
There’s also a special operator "in" for that.

The syntax is:

`"key" in object`
For instance:
```js
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist
```
Please note that on the left side of in there must be a property name. That’s usually a quoted string.

If we omit quotes, that means a variable, it should contain the actual name to be tested. For instance:
```js
let user = { age: 30 };

let key = "age";
alert( key in user ); // true, property "age" exists
```
Why does the in operator exist? Isn’t it enough to compare against undefined?

Well, most of the time the comparison with undefined works fine. But there’s a special case when it fails, but "in" works correctly.

It’s when an object property exists, but stores undefined:
```js
let obj = {
  test: undefined
};

alert( obj.test ); // it's undefined, so - no such property?

alert( "test" in obj ); // true, the property does exist!
```
In the code above, the property obj.test technically exists. So the in operator works right.

Situations like this happen very rarely, because undefined should not be explicitly assigned. We mostly use null for “unknown” or “empty” values. So the in operator is an exotic guest in the code.

The “for…in” loop
To walk over all keys of an object, there exists a special form of the loop: for..in. This is a completely different thing from the for(;;) construct that we studied before.

The syntax:
```js
for (key in object) {
  // executes the body for each key among object properties
}
```

For instance, let’s output all properties of user:
```js
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}
````
Note that all “for” constructs allow us to declare the looping variable inside the loop, like let key here.

#### Summary
