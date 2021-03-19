//1.primitive
//2.reference

//Object, array, function

let person = {
  name: "John",
  age: 23,
  gender: "Male"
}
// name property of person object
//key, value 

//set
person.nationality = "Uzbek"

//delete person.nationality
//console.log('object person - ', person)
//console.log(person['name'])

//console.log(typeof person)

let subscriber = {
  name: "Jack"
};
subscriber["age"] = 22;
subscriber["likes birds"] = true;

for (let a in subscriber) {
 // console.log(a)
}
function greet(person) {
  if (person === { name: 'Marzbarz' }) { 
      console.log('Hi Marzbarz!');
  } else {
      console.log('Who dis?');
  }
}

function greet(person) {
  if (person.name === 'Marzbarz') { 
      console.log('Hi Marzbarz!');
  } else {
      console.log('Who dis?');
  }
}