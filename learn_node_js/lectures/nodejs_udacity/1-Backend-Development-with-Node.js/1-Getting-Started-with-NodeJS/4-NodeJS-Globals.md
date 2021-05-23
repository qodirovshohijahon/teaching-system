See 5 - ND0067 FSJS C01 L01 A05a Module System V2

Node.js and the V8 Engine
Node.js uses Google's V8 engine as a runtime to process JavaScript.

JavaScript is sent to the V8 engine in Node.js. Any asynchronous code is:

Sent off to be processed by the Node APIs
Added to the queue
Processed by the event loop
Sent back to the V8 Engine
Processed to bytecode.

[How JS code execute](../img/fsjs-c1-l1-v8-stack.jpg)

There are some APIs that overlap between the browser and Node.js, like Timers and Console, but others that are exclusive to the browser or Node.js like File System, which is exclusive to Node.js.

Node.js needed a module system as far back as 2009, 6 years before the ES6 Module system. Node.js used the Common JS module system to break code into smaller chunks; It's still used today. TypeScript (a JavaScript superset) compiles to the Common JS Module System.

[Node Started Using Modules in 2009](../img/fsjs-c1-timeline.jpg)


### The Module System
See 6 - ND0067 FSJS C01 L01 A05b Node Modules V1

Common JS Module System
The module system creates the ability to export and import JavaScript from separate files.

Export
// working file = util/logger.js

// exports as object
module.exports = { 
    myFirstFunction: myFirstFunction,
    mySecondFunction: mySecondFunction
}

// using ES6 shorthand property names
module.exports = { 
    myFirstFunction,
    mySecondFunction
}
It is most common to see shorthand property names in use, however, some developers choose to use very specific function names when developing their libraries, and then create short names for the functions when exporting choosing to document the short names for ease of the library user, but adding to the maintenance overhead for the library developer.

Require
// working file = index.js
// all functions in util/logger.js are available
const logger = require('./util/logger.js');

// using ES6 object destructuring, only myFirstFunction is available
const { myFirstFunction } = require('./util/logger.js');
It is standard to name the const the same as the file or module name. Omitting the file extension is safe and common practice. Destructuring is often used when only requiring one function from an otherwise large library.

When using require, a preceding slash must come before a locally created module name; otherwise, Node.js will search the core modules and then node_modules (discussed later).

dirname and filename
The scope of the module specification includes access to both the directory of the module as well as access to the absolute path of the filename of a file within a module. The ability to access directories and filenames becomes especially useful when working with the path and filesystem modules discussed later.

// working file = /app/util/logger.js

console.log(__dirname);
// prints /app/util

console.log(__filename);
// prints /app/util/logger.js
Timers
The Node.js timers API is similar, but not identical to the browser API. Node v11 introduced what would be for some projects, a breaking change in that it made timers behave even more similar to the browser API.

You're likely familiar with setTimeout();, setInterval();, clearInterval(); and clearTimeout(); already; Node.js introduces setImmediate(); and clearImmediate();which get's its own phase in the Node.js event loop which we will look at in the event loop lesson.

Console
Like Timers, the Console API is likely familiar to you as part of the browser API. We typically learn to use console.log as our first debugging method with JavaScript and that it only serves to debug and should be removed in shipped code.

The options available within the Node.js console are generally the same, and console.log serves well as an initial debugging tool. However, consolecan serve as an incredible tool for giving server-side feedback, such as letting you know that you have successfully connected to the server or creating a node module that takes in information from the user through a console application. It can be used in development for logging events, but it is best practice to log to a file to save the data rather than just logging to the terminal. The use of console is typically blocking (though there are some inconsistencies between versions and operating systems.

Examples
console.log('Server ready');
Prints to the console using standard output (stdout)
Creates a new line for each statement.
console.error('Server failed');
Shows in the console using standard error (stderr)
Creates a new line for each statement.
In the browser API, it is clear when console.error();is used. In Node.js, there may be little to no distinction visually between which is used.

More Options for console
There are many more options available and it is worth it to see all that console is capable of.

Note: using console should never take the place of proper error handling. Any console statement that remains in your shipped code should serve a specific purpose outside of general debugging.

Further Reading on Error Handling
Read more about Node.js's error class from the Node.js documentation.
Read more on error handling in Node.js from Smashing Magazine's Kelvin Omereshone: Better Error Handling In NodeJS With Error Classes
Process Module
Not found in the browser APIs, Process relates to the global node execution process which occurs when you run a js file through Node.js. Process has many options available--we will focus on the most commonly seen.

Examples
process events
The Process module contains the ability to perform tasks immediately before the process exits, and when it exits. beforeExit allows for asynchronous calls which can make the process continue whereas exit only happens once all synchronous and asynchronous code is complete.

// create conditions for exit code options
// example: 0 typically implies without errors, 1 with.

process.exitCode = 1;

process.on('beforeExit', () => {
  console.log('beforeExit event');
});

process.on('exit', (code) => {
  console.log(`exit event with code: ${code}`);
});
process.env
console.log(process.env);
Process.env gives you access to the environment information of your Node.js application. It also allows you to add environment variables that can be used if your code is dependent on the environment it is run in. With the use of a module like dotenv you can easily control your project's configuration in separate .env files based on what environment you are using (ex. production vs test vs development).

Common reasons include: changing the port or IP, accessing static files, or access to the production vs development databases.

process.stdout
A lesser-known fact is that console.log actually utilizes process.stdout in order to log to the console.

process.stdout.write('Hello, world.'); and console.log('Hello, world.'); are nearly identical except for one very important difference, process.stdout does not force a new line break. This allows you to create helpful tools like progress bars.

process.argv
An array containing your console arguments information for your executed process.

// index.js
// When run, will output an array of all arguments supplied to the node process.

console.log(process.argv);
// Terminal

$ node index.js argument1 argument2 
[
  '/usr/local/bin/node',
  '/Users/user/Desktop/app/index.js',
  'argument1',
  'argument2'
]
When index.js was run through Node.js, the entire command contained four arguments, so the array has four values, the location of Node.js on the system, the location of the file run, and then two additional arguments.

process.argv allows you to pass in arguments to your application which can be a common occurrence when needing to parse data from files.

process.nextTick
Allows you to run JavaScript between the different phases of the event loop. process.nextTick will be described in detail when discussing the event loop.

New Terms
Term	Definition
Interpreted Language	The language is read by a runtime and executed on the spot and errors are found on execution
Superset	A language that extends or builds on top of another language or standard.
Further Reading
More on Node.js globals from the Node.js documentation.


Links
- [x] https://nodejs.org/api/globals.html
- [x] 