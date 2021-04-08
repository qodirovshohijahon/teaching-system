// arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
// arr.lastIndexOf(item, from) – same, but looks for from right to left.
// arr.includes(item, from) – looks for item starting from index from, returns true if found.


// let randomArr = [1, 2, false]

// console.log(randomArr.indexOf(1))
// console.log(randomArr.indexOf(false))
// console.log(randomArr.indexOf(3))

// console.log(randomArr.includes(3))
// console.log(randomArr.includes(false))


let students = [
  {id: 1, name: "Ali"},
  {id: 2, name: "Bek"},
  {id: 3, name: "Sher"}
];

// find

// let student = students.find(function (item) {
//     return item.id == 2;
// })

// let student = students.find(function (item) {
//     return item.name == "Ali";
// })

let student = students.find(item => item.id == 2)
console.log(student.name)