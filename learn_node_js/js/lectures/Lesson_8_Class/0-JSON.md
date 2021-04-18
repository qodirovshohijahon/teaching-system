#### JSON

```js
let car = {
  name: "BMW",
  price: 30000,
};
```

Let’s say we have a complex object, and we’d like to convert it into a string, **to send it over a network**, or just to output it for logging purposes.

Naturally, such a string should include all important properties.

We could implement the conversion like this:

```js
let car = {
  name: "BMW",
  price: 30000,

  toString() {
    return `{name: "${this.name}", price: ${this.price}}`;
  },
};
```

### What is the development & production level of programming (please explain)  :exclamation:


…But in the process of **development**, 
- [x] new properties are added, 
- [x] old properties are renamed 
- [x] and removed. 

Updating such `toString` every time can become a pain.
 
We could try to :thumbsup: loop over properties in it, but what if the object is **complex** and **has nested objects** in properties? 

We’d need to implement their conversion as well.

Luckily, there’s no need to write the code to handle all this. The task has been solved already.

#### JSON.stringify

The **JSON** (JavaScript Object Notation) is a general format to represent values and objects. 

It is described as in RFC 4627 standard. 

Initially it was made for **JavaScript**, but many other languages have libraries to handle it as well. 

So it’s easy to use JSON for data exchange when the client uses JavaScript and the server is written on Ruby/PHP/Java/Whatever.

```js
let car = {
  name: "BMW",
  price: 30000,
};
```

```js
  let json = JSON.stringify(car);

  console.log(typeof json); 

  console.log(json);
  /* JSON-encoded object:
 ```

 The method **JSON.stringify(student) **takes the object and converts it into a string.


The resulting json string is called a JSON-encoded or serialized or stringified or marshalled object. We are ready to send it over the wire or put into a plain data store.


JSON.stringify can be applied to primitives as well.

JSON supports following data types:

- [x] Objects { ... }
- [x] Arrays [ ... ]
- [x] Primitives:
- [x] strings,
- [x] numbers,
- [x] boolean values true/false,
- [x] null.

For instance:

```js
  // a number in JSON is just a number
  alert( JSON.stringify(1) ) // 1

  // a string in JSON is still a string, but double-quoted
  alert( JSON.stringify('test') ) // "test"

  alert( JSON.stringify(true) ); // true

  alert( JSON.stringify([1, 2, 3]) ); // [1,2,3]
```
 