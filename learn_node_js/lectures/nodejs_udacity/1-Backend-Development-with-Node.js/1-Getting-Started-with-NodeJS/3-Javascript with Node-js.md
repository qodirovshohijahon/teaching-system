Writing and Running Javascript with Node.js
Installing Node

See 3 - ND0067 FSJS C01 L01 A03 Installation V2

Getting Started
It's easy to get Node.js installed on any system. The fastest method is to download and install the most recent LTS (long-term supported) version directly from https://nodejs.org/.

NodeJS LTS version download page for all platforms: https://nodejs.org/en/download/

Once Node.js is installed, you can open up your system's command-line utility to get started running JavaScript outside of the browser.

To test that Node.js is working, check your current version by running $ node -v.

Using Classroom Workspaces
Remember, you can use classroom workspaces for all of the exercises in this course. There is a workspace below to gest out this code.

More About Node.js
Updating Node.js
If you have projects using older versions of Node.js, updating can introduce breaking changes. Always check the changelog to see what the newest version contains and if it has the potential to break your project. The safest way to update is to backup any projects using Node.js to a repository. Install the latest version of Node.js through nodejs.org, then update all of the project's dependencies. If the risk of introducing breaking changes seems high, Node Version Manager makes it possible to run multiple versions of Node.js on the same system.

Containers
Containers include the runtime, all configurations, and files needed to ensure that all individuals working on a project have the same environment regardless of the operating system or software installed globally. There are several choices to use to create a container for your application. Typically when working on an enterprise project, you will install a container software and run your project within that container which will also include a version of node.js that won't interfere with the version installed globally on your system.

Running JavaScript with Node.js
See 
4 - ND0067 FSJS C01 L01 A04 Running Javascript V2
REPL
REPL stands for Read, Evaluate, Print, and Loop.
To access the Node.js REPL environment, run:
$node
To run index.js use:
$ node src/index.js
or

$ node src/index
or

$ node src/.
or

$ node src
or

$ node ./src/index.js
To run other files use:
$ node src/path-to-file.js
or

$ node src/path-to-file
or

$ node ./src/path-to-file
It's common to leave off the file extension especially when the developer may be working with TypeScript.



New Terms
Term	Definition
Container	A tool used to encapsulate the entirety of an application including runtime, libraries, and files to run independently of global configurations on an operating system
Node Version Manager (nvm)	A software package that allows a user to run a different version of Node.js for each project on the same machine
REPL (Read, Evaluate, Print, Loop)	An environment used for running programming languages
Further Reading
Learn more about containers from the most popular container application Docker: What is a Container?


Links
- [x] https://nodejs.org/en/
- [x] https://nodejs.org/en/download/
- [x] https://github.com/nvm-sh/nvm 
- [x] https://www.docker.com/resources/what-container