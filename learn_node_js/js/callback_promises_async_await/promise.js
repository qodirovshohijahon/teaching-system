// pending, fullfilled, rejected;

let promise = new Promise(function (resolve, reject) {

});
// console.log(promise)

let isYourDadHappy = true;

const willGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isYourDadHappy) {
            let phone = {
                brand: "Samsung",
                color: "black"
            };
            resolve(phone)
        } else {
            let reason = new Error('Your dad is unhappy')
            reject(reason)
        }
    }
)

var showOff = function (phone) {
  var message =
    "Hey friend, I have a new " + phone.color + " " + phone.brand + " phone";

  return Promise.resolve(message);
};


const askDad = function () {
  console.log("before asking Mom"); // log before

  willGetNewPhone
    .then(showOff)
    .then(fulfilled => console.log(fulfilled)) // fat arrow
    .catch(error => console.log(error.message)); // fat arrow
};

// askDad();
