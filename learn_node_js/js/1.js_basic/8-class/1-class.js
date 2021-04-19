// function User(name, age, position) {
//     this.name = name;
//     this.age = age;
//     this.position = position;
// }

// let myUser = new User('Ali', 23, 'FrontEnd Developer')

// console.log(myUser)

// class

class User {
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    greeting() {
        console.log(`Username is ${this.name}`)
    }
}

let yourUser = new User('Sher', 23, 'FrontEnd Developer')

// console.log(yourUser.greeting())