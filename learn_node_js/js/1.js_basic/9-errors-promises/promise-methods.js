


// let urls = [
//   "https://api.github.com/users/abdulvorisjs",
//   "https://api.github.com/users/Sunnat-developer",
//   "https://api.github.com/users/Lochinbek3054",
// ];

// // map every url to the promise of the fetch
// let requests = urls.map((url) => fetch(url));

// // Promise.all waits until all jobs are resolved
// Promise.all(requests).then((responses) =>
//     responses.forEach((response) => {
//         // console.log(`${response.url}: ${response.status}`)
//         console.log(`${response.url}: ${response.status}`)
//     })
// );


// let names = ["remy", "qodirovshohijahon", "fabpot"];

// let requests = names.map((name) =>
//   fetch(`https://api.github.com/users/${name}`)
// );


// Promise.all(requests)
//   .then((responses) => {
//     for (let response of responses) {
//       console.log(`${response.url}: ${response.status}`);
//     }

//     return responses;
//   })
//   .then((responses) => Promise.all(responses.map((r) => r.json())))
//   .then((users) => users.forEach((user) => console.log(user.name)));


// let urls = [
//   "https://api.github.com/users/iliakan",
//   "https://api.github.com/users/remy",
//   "https://no-such-url",
// ];

// Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
//   // (*)
//   results.forEach((result, num) => {
//     if (result.status == "fulfilled") {
//       console.log(`${urls[num]}: ${result.value.status}`);
//     }
//     if (result.status == "rejected") {
//       console.log(`${urls[num]}: ${result.reason}`);
//     }
//   });
// });