let student =  {
    name: "Sunnat",
    id: 1
}

let newStudent = {}

newStudent = student


newStudent.name = "Ali"
//console.log(newStudent.name)
//console.log(student.name)

//let numberOne = 20;
let numberTwo;

//console.log(numberOne)


//console.log("after changing numberTwo:", numberTwo)
//console.log("after changing numberOne:", numberOne)

let obj1 = {}
let obj2 = {}
let a, b;
//console.log("Reference type: array, object, functions")
//console.log(obj1 == obj2)
//console.log(a == b)


let user = {
    name: "John",
    age: 30,
    surname: "Jack",
    salary: {
        quantity: 10000
    }
  };
//console.log(user.salary.quantity)
let customer = {
    surname: "Beck",
    gender: "Male"
}
  let clone = {}; 
  
//  for (let key in user) {
 //   clone[key] = user[key]; 
//    console.log(`clone keylari:`, clone[key]) 
//  }

//  console.log(clone)
//  clone.age = 33;
//  console.log(clone)
  clone = Object.assign(user, customer)
//  console.log(clone)
  clone.surname = "Ali"
//  console.log(clone.surname)

  // now clone is a fully independent object with the same content
  //clone.name = "Pete"; // changed the data in it
  
//  alert( user.name ); 


//this

let laptop = {
    name: "ideapad",
    price: 700,
    buy() {
       let price = 800
       console.log("Price of Laptop:", this.price)     
    }
}

//console.log(laptop.buy())

//function getNumber() {
//    let numberOne;
//    numberOne = 10;
//    return numberOne;
//}

//console.log(getNumber())
//console.log(numberOne)

let box = {
  futbolka : "200",  
  shim : "100" , 
  romolcha : "200" , 
};
function cashRegister(price){
  let value=0;
  for(key in price){
  console.log(price)
  value += parseInt(price[key]);
}
return value;
}
alert(cashRegister(box));

