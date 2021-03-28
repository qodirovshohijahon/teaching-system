// let car = {
//     name: "Audi",
//     price: 10000,
// }

// car.buyCar = function() {
//     console.log("I want to buy my car")
// }

// console.log(car.buyCar()) // object methods

// function repaintMyCar() {
//     console.log("I repainted my Car")
// }

// car.repaintMyCar = repaintMyCar;

// console.log(car.repaintMyCar())


// let user = {
//     callMyName: function() {
//         console.log("My name is Ali")
//     }
// }

// let user = {
//     callMyName() {
//         console.log("My name is Ali")
//     }
// }

// console.log(user.callMyName())  //Method shorthand


let car = {
    name: "Audi",
    price: 10000,
    buyCar() {
     console.log(`I want to buy ${this.name}`)
    }
}
 // this

// console.log(car.buyCar())
