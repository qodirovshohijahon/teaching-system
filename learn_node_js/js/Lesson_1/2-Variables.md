<details>
<summary><b>Variables</b></summary>
    Most of the time, a JavaScript application needs to work with information. Here are two examples:<br>
    <li>An online shop – the information might include goods being sold and a shopping cart.</li>
    <li>A chat application – the information might include users, messages, and much more.</li><br>
    Variables are used to store this information.
.<br>
</details>


<details>
<summary><b>A variable</b></summary>
    JavaScript programs can be inserted almost anywhere into an HTML document using the script tag.<br>
    `let message;`<br>
    <li>We can also declare multiple variables in one line:</li>
        <code>      let user = 'John', age = 25, message = 'Hello';</code>
    <li>var instead of let
    In older scripts, you may also find another keyword: var instead of let:</li><br>
    <code>      var message = 'Hello'`;</code>
</details>

<details open>
<summary><b>Variable naming</b></summary>
    There are two limitations on variable names in JavaScript:<br>
    <li>The name must contain only letters, digits, or the symbols $ and _.</li>
    <li>The first character must not be a digit.</li><br>
    <code>let userName;</code><br>
    <code>let test123;</code><br>
    Examples of incorrect variable names:<br>
    <code>let 1a; // cannot start with a digit</code><br>
    <code>let my-name; // hyphens '-' aren't allowed in the name</code>
</details>
<details open>
<summary>Constants</summary>
    <li>To declare a constant (unchanging) variable, use const instead of let:</li>
    <code>const myBirthday = '18.04.1982';</code><br>
    Variables declared using <code>const</code> are called “constants”. They cannot be reassigned. An attempt to do so would cause an error:<br>
    <code>const myBirthday = '18.04.1982';</code><br>
    <code>myBirthday = '01.01.2001'; // error, can't reassign the constant!</code><br>
    When a programmer is sure that a variable will never change, they can declare it with const to guarantee and clearly communicate that fact to everyone.
</details>