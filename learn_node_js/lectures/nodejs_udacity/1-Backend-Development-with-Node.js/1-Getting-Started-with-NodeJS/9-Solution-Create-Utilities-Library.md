Solution: Create a Utilities Library
See 12 - ND0067 FSJS C01 L01 A12 Exercise 01 Utilities Library V1



To Run the Exercise Code
Use node index.js or node index or node .

To Complete the Exercise
Create a utilities folder
Separate the functions into two files
use module.exports = { function1, function2 } to export the functions.
Import the functions into the index.js file using a module name and destructuring. ex: const util = require('utilities/file.js'); or const { function1, function2 } = require('utilities/file.js');
Output the results of the functions to console either using the function name if you have used destructuring or moduleName.functionName if you are calling the module.
Thinking Like a Node.js Developer
Why do you think it is important to separate concerns when developing an application?


