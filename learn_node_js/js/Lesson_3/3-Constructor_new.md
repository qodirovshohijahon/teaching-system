#### 3.10 Constructor, operator "new"
The regular `{...}` syntax allows to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.

That can be done using constructor functions and the "new" operator.

**Constructor function**
Constructor functions technically are regular functions. There are two conventions though:

- [x] They are named with capital letter first.
- [x] They should be executed only with "new" operator.

For instance:
```js
    function User(name) {
        this.name = name;
        this.isAdmin = false;
    }

    let user = new User("Jack");

    alert(user.name); // Jack
    alert(user.isAdmin); // false
```

**When a function is executed with new, it does the following steps:**

- [x] A new empty object is created and assigned to this.
- [x] The function body executes. Usually it modifies this, adds new properties to it.
- [x] The value of this is returned.


In other words, `new User(...)` does something like:

```js
    function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}
```

So `let user = new User("Jack")` gives the same result as:
```js
    let user = {
        name: "Jack",
        isAdmin: false
    };
```

Now if we want to create other users, we can call `new User("Ann"), new User("Alice")` and so on. Much shorter than using literals every time, and also easy to read.

That’s the main purpose of constructors – to implement reusable object creation code.

Let’s note once again – technically, any function can be used as a constructor. That is: any function can be run with new, and it will execute the algorithm above. The “capital letter first” is a common agreement, to make it clear that a function is to be run with new.

**Omitting parentheses**
By the way, we can omit parentheses after new, if it has no arguments:

```js
let user = new User; // <-- no parentheses
// same as
let user = new User();
```

Methods in constructor
Using constructor functions to create objects gives a great deal of flexibility. The constructor function may have parameters that define how to construct the object, and what to put in it.

Of course, we can add to this not only properties, but methods as well.

For instance, new User(name) below creates an object with the given name and the method sayHi:
```js
    function User(name) {
        this.name = name;

        this.sayHi = function() {
            alert( "My name is: " + this.name );
        };
    }

    let john = new User("John");

    john.sayHi(); // My name is: John

    /*
    john = {
    name: "John",
    sayHi: function() { ... }
    }
    */
```