#### 3.8 Object methods, "this"
Objects are usually created to represent entities of the real world, like users, orders and so on:
```js
let user = {
  name: "John",
  age: 30
};
```
And, in the real world, a user can act: select something from the shopping cart, login, logout etc.

Actions are represented in JavaScript by functions in properties.

Method examples
For a start, let’s teach the user to say hello:
```js
    let user = {
        name: "John",
        age: 30
    };

    user.sayHi = function() {
        alert("Hello!");
    };

    user.sayHi(); // Hello!
```

Here we’ve just used a Function Expression to create a function and assign it to the property user.sayHi of the object.

Then we can call it as `user.sayHi()`. The user can now speak!

A function that is a property of an object is called its method.

So, here we’ve got a method sayHi of the object user.

Of course, we could use a pre-declared function as a method, like this:

```js
    let user = {
      // ...
    };

    // first, declare
    function sayHi() {
        alert("Hello!");
    };

    // then add as a method
    user.sayHi = sayHi;

    user.sayHi(); // Hello!
```

#### 3.9 Method shorthand
There exists a shorter syntax for methods in an object literal:

// these objects do the same
```js
user = {
  sayHi: function() {
    alert("Hello");
  }
};

// method shorthand looks better, right?
user = {
  sayHi() { // same as "sayHi: function()"
    alert("Hello");
  }
};
```

As demonstrated, we can omit `"function"` and just write `sayHi()`.

To tell the truth, the notations are not fully identical. There are subtle differences related to object inheritance (to be covered later), but for now they do not matter. In almost all cases the shorter syntax is preferred.

**“this” in methods**
It’s common that an object method needs to access the information stored in the object to do its job.

For instance, the code inside `user.sayHi()` may need the name of the user.

To access the object, a method can use the this keyword.

The value of this is the object “before dot”, the one used to call the method.

For instance:
```js
    let user = {
        name: "John",
        age: 30,

        sayHi() {
            // "this" is the "current object"
            alert(this.name);
        }
    };
```
`user.sayHi(); // John`

Here during the execution of user.sayHi(), the value of this will be user.

Technically, it’s also possible to access the object without this, by referencing it via the outer variable:
```js
    let user = {
        name: "John",
        age: 30,

        sayHi() {
            alert(user.name); // "user" instead of "this"
        }
    };
```

…But such code is **unreliable**. If we decide to copy user to another variable, e.g. admin = user and overwrite user with something else, then it will access the wrong object.

*That’s demonstrated below:*
```js
    let user = {
        name: "John",
        age: 30,

        sayHi() {
            alert( user.name ); // leads to an error
        }
    };


let admin = user;
user = null; // overwrite to make things obvious

admin.sayHi(); // TypeError: Cannot read property 'name' of null
```
If we used **this.name** instead of **user.name** inside the alert, then the code would work.

