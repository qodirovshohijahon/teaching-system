async function getResponse() {

  let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

  // get one header
  console.log(response.headers.get('Content-Type')); // application/json; charset=utf-8

  // iterate over all headers
  for (let [key, value] of response.headers) {
    console.log(`${key} = ${value}`);
  }
}
getResponse()