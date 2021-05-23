See 9 - ND0067 FSJS C01 L03 A13 Exercise 01 V1
To Complete This Exercise:
Import each utility module into the indexSpec.ts file.
Figure out which functions are being used in the index.ts file.
Copy over the arrays being used in the index.ts file.
Write at least 7 specs, one for each of the functions used in the index.ts file. Make sure to use at least 5 different matchers for your specs.
Run npm run test to ensure that all tests pass.


### Testing Asynchronous Code
See 10 - ND0067 FSJS C01 L03 A07 Testing Async Code V1

Testing Asynchronous Code
The key to testing async code is letting Jasmine know when it’s ready to be tested.

Using async/await syntax makes testing easier
Jasmine syntax mimics JavaScript syntax
Add async before the asynchronous function call
Add await before the return
Testing occurs after the return
Using promise syntax with Jasmine
Promise values are included in the return statement
Test is run in the .then() statement that is chained to the return value
Testing promise resolution and rejection with ES6 Promise Matchers Library
.toBeResolved() tests if a promise is resolved and will return true if the promise is resolved
.toBeRejected() tests if a promise is rejected and will return true if the promise is rejected
.toBeRejectedWith(expected value) tests if the expected error is returned


### Solution: Test Driven Development
See 11 - ND0067 FSJS C01 L03 A14 Exercise 02 V1
To Complete This Exercise:
Run npm run test to ensure tests fail.
View the tests on indexSpec.ts and the function on index.ts.
Write the first missing function, modeled from the second if unfamiliar with Axios.
Write the third function.
For the third function, you can call the second function to simplify the work.
Create a countries array by running the second function.
Then, create an array of api calls with the countries array.
You can then create an array of responses with Promise.all and from those responses you can get the capital from the response data.
Write the test following the same structure as the two already available. You can use the same matcher and complete it with any region of your choosing.
Run npm run test to ensure your tests pass.

