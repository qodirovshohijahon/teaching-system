// filter

let students = [
  { id: 1, name: "John", age: 21 },
  { id: 2, name: "Pete", age: 22 },
  { id: 3, name: "Mary", age: 19 },
];

let studentList = students.filter((item) => item.age > 20);

// console.log(studentList.name)

// forEach

// studentList.forEach(item => console.log(item.name))

// map
let myNumbers = [1, 2, 3, 4];

// console.log(myNumbers.map(item => item * 2))

let names = ["Ali", "Sher", "Sunnat"];

let legthOfNames = names.map((item) => item.length);
// console.log(legthOfNames);

//  reverse

// names.reverse();

// console.log(names);

// let userList = "Ali, Sher, Bek"

// let arrayUser = userList.split(', ')

// console.log(arrayUser);

// join

let arrayUsers = ["Ali", "Sher", "Bek"];

let userList = arrayUsers.join('')
console.log(typeof userList)
console.log(userList)
