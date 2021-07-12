JavaScript has two data types:

Primitive types
Reference types
1) Primitive types

It consists of Number, String, Boolean, null, and undefined.
If we assign a primitive type to a variable, we can think of it as we putting that particular value in a particular memory box.
When we assign a value of one variable to another it will be copied into that new variable.
Let me make it more clear for you by an example:

[Show image](https://res.cloudinary.com/practicaldev/image/fetch/s--AXOtjb2v--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/y59prr693im7sqh2p188.jpg)



Look at an above simple example, There I have defined name variable by assigning String primitive type. In order to demonstrate the above-stated points about primitive types, I have created the second variable with name anotherName and copied the value of the name variable into it. Then, I changed the value of anotherName variable to something else. Then, I have printed both variables.

As you can clearly see, Both values are different that clearly proves that values are copied in the case of Primitive types.





2) Reference types

Now you can probably guess about Reference types. It consists of Array, Object, and Function.
In the case of Reference types Variables actually don't have the actual values but it contains a reference to that particular value.
Here, Reference simply means a pointer to another memory location that holds particular value. This might be sound confusing for you at first glance but bear with me. Once you go through it would be very clear to you.

[image showw](https://res.cloudinary.com/practicaldev/image/fetch/s--aMJ7pUlt--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/ewqorhhqk7iapelxmv96.jpg)

In the above example, I have used an array to demonstrate the working of Reference types in JavaScript. First, I have defined arr1 with three elements in it. Then, I have defined arr2 by copying arr1 into it. Now, let me reveal the magic by changing one of the elements in arr2. And then, I have printed both arrays and surprise, both are having that updated value though I have not touched the arr1.

This result produced because of the default behavior of Reference types in JavaScript. As I stated above that Reference types are not copying the actual values rather they are just keeping the reference to that particular value in the memory.

You might have a question that Why Reference types created although we could simply just copy the values:
Answer: It is not always optimal to just copy the values when we are assigning value to a variable. Because copying the values would cost large overhead as it needs to allocate a new memory block and copies the values from that location to this newly allocated memory location. It would be easy in the case of Primitive types as it would not contain many values as arrays or objects.

So this behavior is implemented to save time and memory both. :)

Here ends the topic, primitive types vs reference types. Sometimes developers might think that this is not an important topic. But It always makes you technically sound developer as you know the fundamentals of the particular language.

I hope you liked it and let me know your thought on this topic by commenting down below.

#### Primitive types in JS are data types that are not objects and have no methods. They are immutable, meaning they cannot be altered.



Primitive types in JS are data types that are not objects and have no methods. They are immutable, meaning they cannot be altered.

From MDN:

Six Data Types that are primitives, checked by typeof operator:
```js
undefined : typeof instance === "undefined"
Boolean : typeof instance === "boolean"
Number : typeof instance === "number"
String : typeof instance === "string"
BigInt : typeof instance === "bigint"
Symbol : typeof instance === "symbol"
```
The typeof operator simply returns a string indicating the type of the unevaluated operand.

When a primitive type is assigned to a variable, the variable copies or "becomes" the value that was assigned.

For example:
```js
let a = 1
let b = 1

a === b //true

let x = 'Marzbarz'
let y = 'Marzbarz'

x === y //true
```

Reference
Reference types in JS are:

Objects
Arrays
When a reference type is assigned to a variable, JS stores a reference in memory to the value so that when it is used it can refer back to it.

Let's look at a common code challenge:

```js
function greet(person) {
    if (person === { name: 'Marzbarz' }) { 
        console.log('Hi Marzbarz!');
    } else {
        console.log('Who dis?');
    }
}
```

let input = { name: 'Marzbarz' };
greet(input);

**and compare this one**

```js
function greet(person) {
    if (person.name === 'Marzbarz') { 
        console.log('Hi Marzbarz!');
    } else {
        console.log('Who dis?');
    }
}
```

let name = { name: 'Marzbarz' };
greet(name);

//Hi Marzbarz!