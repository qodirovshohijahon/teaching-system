Before we start
Let's check that you have everything ready to get up and running with the exercises and code presented in this course. Open your Terminal app or Command Prompt and type the following commands to check for the presence and versions of the required platforms, tools and libraries.

Node must be v8 or higher. Check it by running:

node --version
You should be able to execute Node. You can use -e to quickly run Node code, for example:

node -e 'console.log(`My node version is ${process.versions.node}`)'
npm must be v5 or higher. Check it by running:

npm --version
Let's test npm installation. Go ahead and globally install node-static which is a useful local development web server:

npm i -g node-static
You should not see any errors or need sudo if you followed instructions on how to change ownership of npm in the previous unit. If you see permission errors, then please go back to configuring npm and change the ownership of npm's folder.

When node-static is done installing, then you should be able to check static (command for node-static) with (I'm using 0.7.9):

static --version
MongoDB must be v3 or higher:

mongod --version