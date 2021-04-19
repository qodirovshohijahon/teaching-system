const mixedObject = {
  a: "somestring",
  number: 42,
  isDeveloper: false,
  age: 23,
};

// for in

// for (let item in mixedObject) {
// //    console.log(item)
//     console.log(mixedObject[item]);
// }

// built-function
// Object.keys(mixedObject)

// console.log(Object.keys(mixedObject))
// console.log(Object.values(mixedObject))

//console.log(data.usersInfo.age)

// console.log(Object.entries(mixedObject))

let myData = Object.entries(mixedObject)

myData.forEach(element => {
    //console.log(element)
});