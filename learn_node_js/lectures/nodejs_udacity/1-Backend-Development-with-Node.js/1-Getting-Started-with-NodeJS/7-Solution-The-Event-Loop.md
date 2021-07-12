See 11 - ND0067 FSJS C01 L01 A13 Exercise 02 Event Loop V1
12 - ND0067 FSJS C01 L01 A12 Exercise 01 Utilities Library V1

You could have completed this exercise multiple ways, but you were required to use at least 3 different methods to log the results to the console in order.

To run your file:
node index.js or node index or node .

Options for logging:
synchronous - using nothing.
setTimeout - assigning to 0 or a second iteration.
setInterval - could have used a loop of 1 to run one time at 0 or in another iteration.
process.nextTick - to run after the synchronous code or after the polling phase if used with the file system module.
fs - with synchronous code inside to run after the polling phase.
setImmediate - within fs call to run during the check phase.
process.on - to run beforeExit or at exit.
The final result should have logged:
Print First
Print Second
Print Third
Print Fourth
Print Fifth
Thinking Like a Node.js Developer
Think of at least 1 situation where you would want to control the event loop or use a timer. Describe that situation.