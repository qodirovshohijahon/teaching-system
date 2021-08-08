// let myPromise = new Promise(function (myResolve, myReject) {
//   // "Producing Code" (May take some time)

//   myResolve(); // when successful
//   myReject(); // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//   function (value) {
//     /* code if successful */
//   },
//   function (error) {
//     /* code if some error */
//   }
// );


// myPromise.then(
//   function (result) {
//     // Resolve callback.
//     console.log(result);
//     console.log("zami");
//   },
//   function (result) {
//     // Reject callback.
//     console.error(result);
//   }
// );

var willIGetNewPhone = new Promise(function (resolve, reject) {
  let isMomHappy = 1;
  if (isMomHappy) {
    var phone = {
      brand: "Samsung",
      color: "black",
    };
    resolve(phone); // fulfilled
  } else {
    var reason = new Error("mom is not happy");
    reject(reason); // reject
  }
});

var askMom = function () {
  willIGetNewPhone
    .then(function (fulfilled) {
      // yay, you got a new phone
      console.log(fulfilled);
      // output: { brand: 'Samsung', color: 'black' }
    })
    .catch(function (error) {
      // oops, mom didn't buy it
      console.log(error.message);
      // output: 'mom is not happy'
    });
};

// askMom();

//console.log(askMom());