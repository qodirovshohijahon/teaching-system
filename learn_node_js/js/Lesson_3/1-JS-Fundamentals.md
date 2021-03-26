

<details>
<summary><b>The “script” tag</b></summary>
    JavaScript programs can be inserted almost anywhere into an HTML document using the script tag.<br>
    For instance:

        <!DOCTYPE HTML>
        <html>
        <body>
        <p>Before the script...</p>

        <script>
            alert( 'Hello, world!' );
        </script>

        <p>...After the script.</p>

        </body>

        </html>
<br>

</details>

<details>
<summary><b>External scripts</b></summary>
    If we have a lot of JavaScript code, we can put it into a separate file.<br>
    Script files are attached to HTML with the src attribute:<br>

    <script src="/path/to/script.js"></script>
    Here,
     /path/to/script.js <br> 
     is an absolute path to the script from the site root. One can also provide a relative path from the current page. For instance, src="script.js" would mean a file "script.js" in the current folder.
</details>

<details>
<summary><b>Comments</b></summary>
As time goes on, programs become more and more complex. It becomes necessary to add comments which describe what the code does and why.<br><br>
Comments can be put into any place of a script. They don’t affect its execution because the engine simply ignores them.<br>
One-line comments start with two forward slash characters //.<br>
The rest of the line is a comment. It may occupy a full line of its own or follow a statement.

Like here:
```
/* An example with two messages.
This is a multiline comment.
*/
alert('Hello');
alert('World');

// This comment occupies a line of its own
```alert('Hello');

alert('World'); // This comment follows the statement
```
</details>
