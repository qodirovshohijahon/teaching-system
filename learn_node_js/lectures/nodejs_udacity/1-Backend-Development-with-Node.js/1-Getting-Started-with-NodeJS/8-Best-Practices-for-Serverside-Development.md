Best Practices for Serverside Development
When learning a new technology, we tend to follow tutorial after tutorial picking up those tutorials' practices as we go. Tutorials are excellent learning tools, but they tend to be very elementary applications focusing on functionality rather than form.

In a professional environment, form becomes as critical to your application's success as the functionality. There are often many developers working on the same codebase. For this reason, there are some steps you can take at the start of a project to integrate quickly into a professional environment.

We will look more in-depth into some of these tools and concepts later on, but they are helpful to see how to recognize them in the coming exercises.

Focus on Code Quality
Write your code for the person who will work on the project after you.

In the next lesson, we'll look at TypeScript and Unit Testing, which are amazing tools for creating consistency and reducing developer errors when writing code. Still, there are a few other steps that you should be taking as well.

Use a formatter like Prettier for syntactical consistency. JavaScript allows for a lot of syntax variation. Should you use single quotes or double quotes? Semi-colons? How many parameters on a line? Prettier is the most commonly used and can be configured to meet most teams' needs, but your team may have its own formatting rules to follow.

Follow a JavaScript linting tool such as ESLint. Formatters are fantastic, but often not enough. Using a linter to check your patterns and ensure that you aren't calling functions before declaring them. Linters can follow different style guides; there are many popular ones already in existence, or your team may have their own.

And remember, high-quality code includes well-named variables and functions and comments.

Prefer ES6+ and Async/Await
Our goal is always to make our code more maintainable and more readable. ES6 has become the standard and should be used. Node.js tends to lag in implementing new ECMAScript features, but all of the most popular are readily available. Transpiliation can be used if there are concerns working with older versions of Node.js.

Server-side development relies heavily on accessing information from databases, external API's, and processing information; this requires a lot of asynchronous calls. It is generally recognized that in asynchronous JavaScript, Async/Await syntax is the easiest to read. You may find yourself using promise chains if a module provides poor documentation on using Async/Await, or your team prefers it, but this is becoming less common.

Keep Code Small
Applications should be scalable. Node.js is built for scalability. Keep services separate. Node.js encourages the use of modules. Take advantage. Don't make every function its own module, but it is reasonable to group similar functions as individual modules. If you create a module that can be used across your organization, NPM allows for creating private npm packages (discussed later).

With Node.js, there is no reason for your project to turn into an unmaintainable monolith. If your project is small and you never intend to grow it, perhaps monolith architecture works for you. Otherwise, it's worthwhile to learn more about microservice architecture and how it can improve an enterprise project.

Handle Errors
Entire courses exist on error handling. When working with a server, 2 people need to know about errors: The user should be presented with feedback about what has happened and a solution to continue using the application. The developer should be writing and presenting relevant error messages to locate edge cases, improve application reliability, and debug.

Further Reading
We have touched on just a few of the best practices and tools used for building Node.js applications. Here is an extremely in-depth, well-maintained, bookmark-worthy guide: Node.js Best Practices.

#### Links
- [x] https://prettier.io/
- [x] https://eslint.org/
- [x] https://docs.npmjs.com/creating-and-publishing-private-packages/
- [x] https://www.geeksforgeeks.org/monolithic-vs-microservices-architecture/
- [x] https://github.com/goldbergyoni/nodebestpractices