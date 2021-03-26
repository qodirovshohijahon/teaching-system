<details open>
    <summary><b>Objects</b></summary>
    <li>In contrast, objects are used to store keyed collections of various data and more complex entities. In JavaScript, objects penetrate almost every aspect of the language. So we must understand them first before going in-depth anywhere else..</li><br>
    <li>An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything</b>.</li><br>
    <code>let user = new Object(); // "object constructor" syntax`<br>
    let user = {};  // "object literal" syntax`<br>
    </code><br>
    Usually, the figure brackets {...} are used. That declaration is called an object literal.<br>
</details>
<details open>
    <summary><b>Literals and properties</b></summary>
    <li>We can immediately put some properties into `{...}` as “key: value” pairs:.</li>
    <code>
        let user = // an object<br>
        {<br>   
             name: "John",  // by key "name" store value "John"<br>
             age: 30        // by key "age" store value 30<br>
        };
    </code><br>
    <>A property has a key (also known as <code>“name”</code> or <code>“identifier”</code>) before the colon ":" and a value to the right of it.
    In the user object, there are two properties:
    <li>The first property has the name <code>"name"</code> and the value <code>"John"</code>.</li><br>
    The second one has the name <code>"age"</code> and the value <code>30</code>..<br>
    <br>We can add, remove and read files from it any time.<br>
    Property values are accessible using the dot notation:<br>
    <code>
        // get property values of the object:</code><br>
    <code>    alert( user.name ); // John</code><br>
    <code>    alert( user.age ); // 30</code><br><br>
    The value can be of any type. Let’s add a boolean one:<br>
    <code>user.isAdmin = true;</code><br>
    To remove a property, we can use delete operator:<br>
    <code>delete user.age;</code><br><br>
    <b>We can also use multiword property names, but then they must be quoted:</b><br>
    <code>let user = {</code><br>
    <code>        name: "John",</code><br>
    <code>        age: 30,</code><br>
    <code>        "likes birds": true  // multiword property name must be quoted</code><br>
    <code>    };</code><br>
    ```
</details>

<details open>
    <summary><b>Square brackets</b></summary>
    <li>For multiword properties, the dot access doesn’t work:.</li><br>
    That’s to be expected, because projects and requirements are different for everyone <br>
    <code>
        // this would give a syntax error<br>
        user.likes birds = true
    </code><br>
    JavaScript doesn’t understand that. It thinks that we address `user.likes`, and then gives a syntax error when comes across unexpected `birds`.<br>
    The dot requires the key to be a valid variable identifier. That implies: contains no spaces, doesn’t start with a digit and doesn’t include special characters (`$` and `_` are allowed).<br>
    There’s an alternative “<b>square bracket notation</b>” that works with any string:<br>
    <code>
        let user = {};<br>
        // set<br>
        user["likes birds"] = true;<br>
        // get<br>
        alert(user["likes birds"]); // true<br>
        // delete<br>
        delete user["likes birds"];
    </code>
</details>
<details open>
<summary>
    <b>Property value shorthand</b> 
</summary>
    <li>In real code we often use existing variables as values for property names.</li><br>
    For instance:
    ```js
        function makeUser(name, age) {
            return {
                name: name,
                age: age,
                // ...other properties
            };
        }
        let user = makeUser("John", 30);
        alert(user.name); // John   
    ```<br>
    In the example above, properties have the same names as variables. The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter.<br><br>
    Instead of `name:name` we can just write name, like this:
    ```js
        function makeUser(name, age) {
            return {
                name, // same as name: name
                age,  // same as age: age
                // ...
            };
        }
    ```<br><br>
    We can use both normal properties and shorthands in the same object:<br>
    ```js
        let user = {
            name,  // same as name:name
            age: 30
        ;
    ```
</details>
<details open>
    <summary><b>Property existence test, “in” operator</b></summary>
    A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property. There will be no error if the property doesn’t exist!<br><br>
    Reading a non-existing property just returns undefined. So we can easily test whether the property exists:<br><br>
    <code>let user = {};<br>
    alert( user.noSuchProperty === undefined ); // true means "no such property"</code><br>
    There’s also a special operator "in" for that.<br>
    The syntax is:<br>
    `"key" in object`
    ```js
        let user = { name: "John", age: 30 };
        alert( "age" in user ); // true, user.age exists
        alert( "blabla" in user ); // false, user.blabla doesn't exist
    ```<br><br>
    Please note that on the left side of in there must be a property name. That’s usually a quoted string.<br>
    If we omit quotes, that means a variable, it should contain the actual name to be tested. For instance:<br><br>
    ```js
        let user = { age: 30 };<br>
        let key = "age";
        alert( key in user ); // true, property "age" exists
    ```

</details>

<details open>
    <summary><b>Property existence test, “in” operator</b></summary>
    Code is prone to errors. You will quite likely make errors… Oh, what am I talking about? You are absolutely going to make errors, at least if you’re a human, not a robot.<br><br>
    But in the browser, users don’t see errors by default. So, if something goes wrong in the script, we won’t see what’s broken and can’t fix it.<br>
    To see errors and get a lot of other useful information about scripts, “developer tools” have been embedded in browsers.<br>
    Most developers lean towards Chrome or Firefox for development because those browsers have the best developer tools. Other browsers also provide developer tools, sometimes with special features, but are usually playing “catch-up” to Chrome or Firefox. So most developers have a “favorite” browser and switch to others if a problem is browser-specific.<br><br>
    Developer tools are potent, they have many features. To start, we’ll learn how to open them, look at errors, and run JavaScript commands.
</details>

<details open>
    <summary><b>Property existence test, “in” operator</b></summary>
    Code is prone to errors. You will quite likely make errors… Oh, what am I talking about? You are absolutely going to make errors, at least if you’re a human, not a robot.<br><br>
    But in the browser, users don’t see errors by default. So, if something goes wrong in the script, we won’t see what’s broken and can’t fix it.<br>
    To see errors and get a lot of other useful information about scripts, “developer tools” have been embedded in browsers.<br>
    Most developers lean towards Chrome or Firefox for development because those browsers have the best developer tools. Other browsers also provide developer tools, sometimes with special features, but are usually playing “catch-up” to Chrome or Firefox. So most developers have a “favorite” browser and switch to others if a problem is browser-specific.<br><br>
    Developer tools are potent, they have many features. To start, we’ll learn how to open them, look at errors, and run JavaScript commands.
</details>
