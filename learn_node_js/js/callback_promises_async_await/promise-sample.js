//1. // console.log('Promise I am a promise...')

// let promise = new Promise(function (resolve, reject) {
//   console.log("Promise started");
//   console.log("Promise is doing some important work...");
//   console.log("Promise has completed, will resolve shortly");
// //    resolve("Promise resolved");
//   reject("Error occurred");
// });

// promise
//     .then((message) => {
//         console.log("Resolve: ", message);
//     })
//     .catch((error) => {
//         console.log("Reject: ", error);
//     })

// 2.

// function doSomeStuff() {
//   return new Promise(function (resolve, reject) {
//     console.log("Promise started");
//     console.log("Promise is doing some important work...");
//     console.log("Promise has completed, will resolve shortly");
//     resolve("Promise resolved");
//   });
// }

// doSomeStuff()
//     .then((message) => {
//         console.log("Resolved: ", message);
//     })
//     .catch((error) => {
//         console.log("Rejected: ", error);
//     });

// 3.

async function getTodos(url) {
    let res = await fetch(url);
    if (res.ok) {
        let data = await res.json();
        return Promise.resolve(data)
    } else {
        return Promise.reject('Error occured')
    }
}
        
let url = `https://jsonplaceholder.typicode.com/todos/1`;
// getTodos(url);

getTodos(url)
  .then((data) => console.log(data))
    .catch((e) => console.log(e));
  

// fetch is not supported in nodejs
// see in browsers
