// let myObj = {};
// let yourObj = new Object();

// new
// Capitel letters => func Name
// new execete

function User(name) {
//    this = {};
    this.name = name;
    this.age = false;
    this.callMyName = function() {
        console.log(`Hello my name is ${this.name}`)
    }
}

let anotherUser = new User("Ali")

console.log(anotherUser.callMyName()) // consstructor in method

