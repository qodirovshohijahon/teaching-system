```js
console.log("Hello to the Promise tutorial");
let p = new Promise(function (resolve, reject) {
  console.log("Promise started");
  console.log("Promise is doing some important work...");
  console.log("Promise has completed, will resolve shortly");
  resolve("Promise resolved");
});
```

```js
    node promise.js
```

Here we have created a new promise using a **Promise constructor** which takes a function as an argument.
This function is called **executer**. The executer function contains whatever we like to accomplish with our promise.

By convention `resolve` method takes a result in its argument which could be a simple text message or a complex object. `reject` takes an error object.

#### part - 2

By now you have seen the basic working of a Promise. Lets wrap our promise inside a function so that we can control when exactly our Promise is called.

```js
function doSomeStuff() {
  return new Promise(function (resolve, reject) {
    console.log("Promise started");
    console.log("Promise is doing some important work...");
    console.log("Promise has completed, will resolve shortly");
    resolve("Promise resolved");
  });
}
doSomeStuff().then(
  function (message) {
    console.log("Resolved: ", message);
  },
  function (error) {
    console.log("Rejected: ", error);
  }
);
```

```js
async function getTodos(url) {
  let res = await fetch(url);
  if (res.ok) {
    let data = await res.json();
    return Promise.resolve(data);
  } else {
    return Promise.reject("Error occured");
  }
}

let url = `https://jsonplaceholder.typicode.com/todos/1`;
// getTodos(url);

getTodos(url)
  .then((data) => console.log(data))
  .catch((e) => console.log(e));

// fetch is not supported in nodejs
// see in browsers
```


