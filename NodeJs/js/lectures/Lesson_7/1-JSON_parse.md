### JSON.parse()

The **JSON.parse()** method parses a JSON string, constructing the JavaScript value or object described by the string.

An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.

```js
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true
```

#### Syntax

**JSON.parse(text[, reviver])**

- [x] **text** - The string to parse as JSON.
- [x] **reviver** _Optional_ - If a function, this prescribes how the value originally produced by parsing is transformed, before being returned.

```js
let userData =
  '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

alert(user.friends[1]); // 1
```

```js
let json = `{
    name: "John",                     // mistake: property name without quotes
    "surname": 'Smith',               // mistake: single quotes in value (must be double)
    'isAdmin': false                  // mistake: single quotes in key (must be double)
    "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
    "friends": [0,1,2,3]              // here all fine
    }`;
```

#### Using reviver

Imagine, we got a stringified meetup object from the server.

It looks like this:

```js
// title: (meetup title), date: (meetup date)
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
```

…And now we need to deserialize it, to turn back into JavaScript object.

Let’s do it by calling JSON.parse:

```js
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str);

alert(meetup.date.getDate()); // Error!
```

Whoops! An error!

The value of **meetup.date** is a string, not a Date object. How could JSON.parse know that it should transform that string into a Date?

Let’s pass to **JSON.parse** the reviving function as the second argument, that returns all values “as is”, but date will become a Date:

```js
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function (key, value) {
  if (key == "date") return new Date(value);
  return value;
});

alert(meetup.date); // now works!
alert(meetup.date.getDate()); // now works!
```

By the way, that works for nested objects as well:


```js
let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( schedule.meetups[1].date.getDate() ); // works!

```

If a reviver is specified, the value computed by parsing is transformed before being returned. 

Specifically, the computed value and all its properties (beginning with the most nested properties and proceeding to the original value itself) are individually run through the reviver. Then it is called, with the object containing the property being processed as this, and with the property name as a string, and the property value as arguments. If the reviver function returns undefined (or returns no value, for example, if execution falls off the end of the function), the property is deleted from the object. Otherwise, the property is redefined to be the return value.

If the reviver only transforms some values and not others, be certain to return all untransformed values as-is, otherwise, they will be deleted from the resulting object.

```js
JSON.parse('{"p": 5}', (key, value) =>
  typeof value === 'number'
    ? value * 2 // return value * 2 for numbers
    : value     // return everything else unchanged
);

// { p: 10 }
```