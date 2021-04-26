// scheduling call

// 1. setTimeout - delay=10000;
// 2. setInterval 

// let timerId = setTimeout(function| code, [delay], [arg1], [arg2]...)

// function helloMessage () {
//     console.log('Hello World!')
// }

function helloMessage(name) {
//    console.log(`Hello ${name}!`)
}

setTimeout(helloMessage, 1000, 'Ali');


// ES6
setTimeout(() => {
//    console.log('Welcome')
}, 2000)

// let timerId = setTimeout(function| code, [delay], [arg1], [arg2]...)


//let timerId = setInterval(() => console.log('Hello world!'), 2000)

setTimeout(() => {
    clearInterval(timerId),
//        console.log('Stop')
}, 5000);
