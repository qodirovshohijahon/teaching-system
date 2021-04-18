### Date()

Let’s meet a new built-in object: Date. It stores the date, time and provides methods for date/time management.

For instance, we can use it to store creation/modification times, to measure time, or just to print out the current date.

#### Creation

To create a new Date object call `new Date()` with one of the following arguments:

**new Date()**

Without arguments – create a Date object for the current date and time:

```js
let now = new Date();
alert( now ); // shows current date/time
new Date(milliseconds)
Create a Date object with the time equal to number of milliseconds (1/1000 of a second) passed after the Jan 1st of 1970 UTC+0.

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert( Jan01_1970 );

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );
```

An integer number representing the number of milliseconds that has passed since the beginning of 1970 is called a timestamp.

It’s a lightweight numeric representation of a date. We can always create a date from a timestamp using new Date(timestamp) and convert the existing Date object to a timestamp using the date.getTime() method (see below).

Dates before 01.01.1970 have negative timestamps, e.g.:

```js
// 31 Dec 1969
let Dec31_1969 = new Date(-24 _ 3600 _ 1000);
alert( Dec31_1969 );
```

**new Date(datestring)**

If there is a single argument, and it’s a string, then it is parsed automatically. The algorithm is the same as Date.parse uses, we’ll cover it later.

```js
let date = new Date("2017-01-26");
alert(date);
// The time is not set, so it's assumed to be midnight GMT and
// is adjusted according to the timezone the code is run in
// So the result could be
// Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
// or
// Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)
```

**new Date(year, month, date, hours, minutes, seconds, ms)**

Create the date with the given components in the local time zone. Only the first two arguments are obligatory.

- [x] The **year** must have 4 digits: 2013 is okay, 98 is not.
- [x] The **month** count starts with 0 (Jan), up to 11 (Dec).
- [x] The **date** parameter is actually the day of month, if absent then 1 is assumed.
- [x] If **hours/minutes/seconds/ms** is absent, they are assumed to be equal 0.

```js
new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours etc are 0 by default
```

#### Access date components

There are methods to access the year, month and so on from the Date object:

**getFullYear()**
Get the year (4 digits)

**getMonth()**
Get the month, from 0 to 11.

**getDate()**
Get the day of month, from 1 to 31, the name of the method does look a little bit strange.

**getHours(), getMinutes(), getSeconds(), getMilliseconds()**
Get the corresponding time components.

**getDay()**
Get the day of week, from 0 (Sunday) to 6 (Saturday). The first day is always Sunday, in some countries that’s not so, but can’t be changed.

```js
// current date
let date = new Date();

// the hour in your current time zone
alert(date.getHours());

// the hour in UTC+0 time zone (London time without daylight savings)
alert(date.getUTCHours());
```

Besides the given methods, there are two special ones that do not have a UTC-variant:

**getTime()**
Returns the timestamp for the date – a number of milliseconds passed from the January 1st of 1970 UTC+0.

**getTimezoneOffset()**
Returns the difference between UTC and the local time zone, in minutes:

#### Date to number, date diff

When a Date object is converted to number, it becomes the timestamp same as date.getTime():

```js
let date = new Date();
alert(+date); // the number of milliseconds, same as date.getTime()
```

The important side effect: dates can be subtracted, the result is their difference in ms.

That can be used for time measurements:

```js
let start = new Date(); // start measuring time

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // end measuring time

alert(`The loop took ${end - start} ms`);
```

#### Date.now()

If we only want to measure time, we don’t need the Date object.

There’s a special method Date.now() that returns the current timestamp.

It is semantically equivalent to new Date().getTime(), but it doesn’t create an intermediate Date object. So it’s faster and doesn’t put pressure on garbage collection.

It is used mostly for convenience or when performance matters, like in games in JavaScript or other specialized applications.

So this is probably better:

```js
let start = Date.now(); // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // done

alert(`The loop took ${end - start} ms`); // subtract numbers, not dates
```
