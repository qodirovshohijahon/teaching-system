// async

// let f = async function myFunc() {
//     return 1;
// }

// console.log(f());


// await

let f = async function myFunc() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise done!'), 2000)
    })

    let result = await promise; // *
    // execution
    console.log(result)
}

// f();