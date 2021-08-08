let car = {
  name: "BMW",
  price: 3000,

  toString() {
    return `{name: ${this.name}, price: ${this.price}}`
  }
}
//let str = "{"name":"BMW","price":3000}"
let myStr = `{"name": "John"}`;
//console.log("H")
let myCar = JSON.parse(myStr)
// console.log(typeof myCar)
// console.log(myCar)
let data = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(data);

console.log(meetup.date.getDate()); // Error!

// console.log(car.toString())
// console.log(typeof())
// JSON

// complex data type
// console.log(JSON.stringify(car))

// console.log(JSON.stringify(true))
// console.log(JSON.stringify(1))
// console.log(JSON.stringify([1,2,3,4]))


let getData = new Date();