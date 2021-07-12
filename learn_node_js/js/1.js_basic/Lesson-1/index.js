console.log("Hello world!")

//+, - ,*, /

//let x = "a", y = "b";
//console.log("Glow" > "Glee")
//x = x + 1
//console.log("2" > 1) // 2 > 1

//console.log("01" == 1) // 1 == 1
console.log();
//let x = 0, y = "0";
//console.log(Boolean(x))
//console.log(Boolean(y))
//Falsy values
//null, undefined, 0, ""
//console.log(Boolean(0) == Boolean(" "))

// strict equality

//console.log(0 === false)
//console.log(undefined === false)

//==      => value1 == valu2
//===     => value1+type1  === value2+type2


// conditional if, else
// ternary operator
let myName = "Sunnat";

//(myName == "Sunnat") ? alert("Sunnat") : alert("Other");



//||, &&,

//console.log(1 && 0)

//nullish, ??

let result = undefined;

//result = (a !== null && a !== undefined) ? a : b

//console.log(result ?? "Hello")

//For loop, while, do while

// for (let i = 0; i < 4; i++ ) {
//     alert("Welcome") // iteration, iteratsiya
// }
//let name = "Ali"
while ( name == "Ali" ) {
//    alert(name)
}
//let myNumber = 10;
// do {
//     alert(myNumber)
//     myNumber--;
// } while(myNumber > 1)


let sum = 0;

// while (true) {
//     let value = +(prompt("Raqamni kiriting..,", ""))
//     console.log(typeof value)
//     if (!value) break;
//     sum += value;
// //    sum = sum + value
// }

//alert(`Sum = ${sum}`)

// for (let i = 0; i < 10; i++ ) {
//     if (i % 2 == 1) continue;
//     alert(i)
// }

//tanlash, switch, case

// let myNumber = 20;

// switch(myNumber) {
//     case 10:
//         console.log(10);
//         break;
//     case 15:
//         console.log(15)
//         break;
//     case 20:
//         console.log(20)
//         break;
//     default:
//         console.log("Bunday son yo'q")
// }

// function showMyName() { // parametr
//     let name;
//     name = 'Sunnat' //local var
//     console.log(`My name is `, name)
// }


// function showMyName(name = "Sunnat") { // default
//     console.log(`My name is `, name)
// }

//calling function
//showMyName()
//variable naming
//console.log(showMyName("Sunnat"))

//function naming

//clean code, readable

// function showOrders() {

// }
// getUser
// showMyPurchases

// arrow function

function sum1(numberOne, numberTwo) {
    return numberOne + numberTwo
}
//ES6
let sum2 = (numberOne, numberTwo) => numberOne + numberTwo;

console.log(sum1(10,20) == sum2(10,20))