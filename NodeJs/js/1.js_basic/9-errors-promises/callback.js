
































// // A callback is a function that is to be executed after
// // another function
// //     has finished executing — hence the name ‘call back’.


// // More complexly put: In JavaScript, functions are objects.
// // Because of this, functions can take functions as arguments,
// // and can be returned by other functions.Functions that
// // do this are called higher - order functions.
// // Any function that is passed as an argument is called
// // a callback function.

// // Nega kerak

// // For one very important reason — JavaScript is an event driven language
// // This means that instead of waiting for a response before moving on,
// // JavaScript will keep executing while listening for other events.
// // Lets look at a basic example:

// function first() {
//   console.log(1);
// }

// function second() {
//   console.log(2);
// }

// // first();
// // second();

// // For example, an API request where we have to send the 
// // request then wait for a response

// function first() {
//   // Simulate a code delay
//   setTimeout(() => {console.log(1);}, 500);
// }
// function second() {
//   console.log(2);
// }

// // first();
// // second();

// // It’s not that JavaScript didn’t execute our functions in the order we wanted it to,
// // it’s instead that JavaScript didn’t wait for a response from first()
// // before moving on to execute second().

// // Callbacks are a way to make sure certain code doesn’t execute until
// // other code has already finished execution.



// // Create a Callback

// // callback

// // function doHomework(subject) {
// //   console.log(`Starting my ${subject} homework.`);
// // }

// // //show in console
// // doHomework("math");


// // Now lets add in our callback — as our last parameter
// // in the doHomework() function we can pass in callback.
// // The callback function is then defined in the second argument of our
// // call to doHomework().

// // function doHomework(subject, callback) {
// //   console.log(`Starting my ${subject} homework.`);
// //   callback();
// // }

// // doHomework("math", function () {
// //   console.log("Finished my homework");
// // });


// // But callback functions don’t always have to be defined 
// // in our function call.They can be defined elsewhere in our code 
// // like this:



// function doHomework(subject, call) {
//   console.log(`Starting my ${subject} homework.`);
//   call();
// }
// function alertFinished() {
//   console.log("Finished my homework");
// }
// doHomework("math", alertFinished);


// const showMessage = (name) => {// ES6
//     return `Hello, ${name}`
// }



// function sayHello() {
//     return showMessage('Lochinbek');
// }

// console.log(sayHello())