My Solution

See 16 - ND0067 FSJS C01 L01 A14 Exercise 01 Eslint Part 1 V2

For This Exercise You Should Have:
Initialized NPM and entered necessary details.
npm init
Installed Prettier (version 1.19 if using workspace)
npm i --save-dev prettier@1.19.1
Installed ESLint
npm i --save-dev eslint
Installed ESLint Config Prettier
npm i --save-dev eslint-config-prettier
Installed ESLint Prettier Plugin
npm i --save-dev eslint-plugin-prettier
Created scripts for both prettier and ESLint. Example:
"lint": "eslint 'index.js'",
"prettier": "prettier --config .prettierrc '*.js' --write"
Run prettier and ESLint to find errors
npm run lint
Fixed errors
Run ESLint again to confirm errors were fixed

Part 2
See 17 - ND0067 FSJS C01 L01 A14 Exercise 01 Eslint Part 2 V1

Continue to fix errors until all are resolved
Run ESLint again to confirm that all errors have been fixed.
npm run lint
Thinking Like a Node.js Developer
How can you see ESLint and Prettier helping you on future individual projects? When working with teams?

