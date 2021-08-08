// Element qo'shish va olib tashlash:

// push(...items) – adds items to the end,
// pop() – extracts an item from the end,
// shift() – extracts an item from the beginning,
// unshift(...items) – adds items to the beginning.


// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.


let arr = ['Javascript', "is", "awesome"]

delete arr[1];

// delete Object.key

// console.log(arr[1])
// console.log(arr)
// console.log(arr.length)

// splice

let text = ["I", "study", "JavaScript"];

//text.splice(1, 1)

//console.log(text)

text.splice(0, 3, "I", "learn", "Java")

// console.log(text)

// let myArr = ["Programming", "is", "cool"]

// myArr.splice(1, 2)

// console.log(myArr)