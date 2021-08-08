### Scheduling: setTimeout and setInterval

We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.

There are two methods for it:

 - [x] setTimeout allows us to run a function once after the interval of time.
 - [x] setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

These methods are not a part of JavaScript specification. But most environments have the internal scheduler and provide these methods. In particular, they are supported in all browsers and Node.js.

**setTimeout**
The syntax:
```js
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
```
Parameters:

*func|code*
Function or a string of code to execute. Usually, that’s a function. For historical reasons, a string of code can be passed, but that’s not recommended.

*delay*
The delay before run, in milliseconds (1000 ms = 1 second), by default 0.

*arg1, arg2…*
Arguments for the function (not supported in IE9-)


For instance, this code calls sayHi() after one second:

```js
function sayHi() {
  alert('Hello');
}

setTimeout(sayHi, 1000);
```

**With arguments:**
```js
function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John
If the first argument is a string, then JavaScript creates a function from it.
```
So, this will also work:

setTimeout("alert('Hello')", 1000);

But using strings is not recommended, use arrow functions instead of them, like this:

```js 
setTimeout(() => alert('Hello'), 1000);
```

Pass a function, but don’t run it
Novice developers sometimes make a mistake by adding brackets () after the function:

**// wrong!**
```js
setTimeout(sayHi(), 1000);
```

That doesn’t work, because setTimeout expects a reference to a function. And here sayHi() runs the function, and the result of its execution is passed to setTimeout. In our case the result of sayHi() is undefined (the function returns nothing), so nothing is scheduled.

#### setInterval
The setInterval method has the same syntax as setTimeout:

```js
let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
```
All arguments have the same meaning. But unlike setTimeout it runs the function not only once, but regularly after the given interval of time.

**To stop further calls, we should call clearInterval(timerId).**

The following example will show the message every 2 seconds. After 5 seconds, the output is stopped:
```js
// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
```

