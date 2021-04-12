<details>
    <summary><b>What is JavaScript?</b></summary>
    <li>JavaScript was initially created to “<b>make web pages alive</b>”.</li><br>
    <li>The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.</li><br>
    <li>Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the <b>JavaScript engine</b>.</li><br>
    <li>V8 – in Chrome and Opera.
        <li>SpiderMonkey – in Firefox.</li>
    …There are other codenames like “<b>Chakra” for IE</b>, <b>“ChakraCore” for Microsoft Edge</b>, <b>“Nitro” and “SquirrelFish” for Safari</b>, etc.</li>
</details>
<details>
    <summary><b>How do engines work?</b></summary>
    <li>The engine (embedded if it’s a browser) reads (“parses”) the script.</li>
    <li>Then it converts (“compiles”) the script to the machine language.</li>
    <li>And then the machine code runs, pretty fast.</li>
    The engine applies optimizations at each step of the process. It even watches the compiled script as it runs, analyzes the data that flows through it, and further optimizes the machine code based on that knowledge.
</details>

<details>
    <summary><b>Languages “over” JavaScript</b></summary>
    <li>The syntax of JavaScript does not suit everyone’s needs. Different people want different features.</li><br>
    That’s to be expected, because projects and requirements are different for everyone <br>
    <b>So recently a plethora of new languages appeared, which are transpiled (converted) to JavaScript before they run in the browser.</b>
    <li>Modern tools make the transpilation very fast and transparent, actually allowing developers to code in another language and auto-converting it “under the hood”.</li>
    <b>Examples of such languages:</b><br><br>
    <li><b>CoffeeScript</b> is a “syntactic sugar” for JavaScript. It introduces shorter syntax, allowing us to write clearer and more precise code. Usually, Ruby devs like it.</li>
    <li><b>TypeScript</b> is concentrated on adding “strict data typing” to simplify the development and support of complex systems. It is developed by Microsoft.</li>
    <li><b>Flow</b> also adds data typing, but in a different way. Developed by Facebook.</li>
    <li><b>Dart</b> is a standalone language that has its own engine that runs in non-browser environments (like mobile apps), but also can be transpiled to JavaScript. Developed by Google.</li>
    <li><b>Brython</b> is a Python transpiler to JavaScript that enables the writing of applications in pure Python without JavaScript.</li>
    There are more. Of course, even if we use one of transpiled languages, we should also know JavaScript to really understand what we’re doing.
</details>
<details>
<summary>
    <b>Summary</b> 
</summary>
    <li>JavaScript was initially created as a browser-only language, but it is now used in many other environments as well.</li>
    <li>Today, JavaScript has a unique position as the most widely-adopted browser language with full integration in HTML/CSS.</li>
    <li>There are many languages that get “transpiled” to JavaScript and provide certain features. It is recommended to take a look at them, at least briefly, after mastering JavaScript.</li>
</details>
<details>
    <summary><b>Developer console</b></summary>
    Code is prone to errors. You will quite likely make errors… Oh, what am I talking about? You are absolutely going to make errors, at least if you’re a human, not a robot.<br><br>
    But in the browser, users don’t see errors by default. So, if something goes wrong in the script, we won’t see what’s broken and can’t fix it.<br>
    To see errors and get a lot of other useful information about scripts, “developer tools” have been embedded in browsers.<br>
    Most developers lean towards Chrome or Firefox for development because those browsers have the best developer tools. Other browsers also provide developer tools, sometimes with special features, but are usually playing “catch-up” to Chrome or Firefox. So most developers have a “favorite” browser and switch to others if a problem is browser-specific.<br><br>
    Developer tools are potent, they have many features. To start, we’ll learn how to open them, look at errors, and run JavaScript commands.
</details>
