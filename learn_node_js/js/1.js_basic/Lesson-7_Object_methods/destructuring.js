// array destructuring assignment

const objectList = [
    { key: "value" },
    { key1: "value1" },
    { key2: "value2" }
];


// let firstElem = objectList[0]
// let secondElem = objectList[1]
// let thirdElem = objectList[2];


//console.log(firstElem)
// console.log(secondElem)
// console.log(thirdElem)

// ES6 (2015)

[firstElem, secondElem, thirdElem] = objectList // destructring assignment
// console.log(firstElem);
// console.log(secondElem);
// console.log(thirdElem);


let [name1, name2, ...name3] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log(name1)
// console.log(name2)
// console.log(name3)

//...name3 => rest operator


// object destructuring

let options = {
  title: "Menu",
  width: 100,
  height: 200,
};

let {title, width, height} = options

// console.log(title)
// console.log(width)


// nested objects

const usersInfo = {
    status: 200,
    data: {
        user: {
            name: "Ali",
            age: 23
        },
        account: "ali@mail.ru",
        company: "Interview.uz"
    }
}


let { data: { user } } = usersInfo

console.log(user)
