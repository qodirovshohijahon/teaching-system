Solution: Build a TypeScript Project
See 7 - ND0067 FSJS C01 L02 A14 Exercise 01 Build Typescript V2

To complete this exercise:
Move index.js to src/index.ts
Initialize npm and add your details.
Add typescript, ts-node and @types/node definitions to dev dependencies.
Run npx tsc --init to add the default TypeScript configuration file.
Add a build script to your package.json file "build": "npx tsc".
Check the configuration file tsconfig.json and apply the following settings:
"target": "es5",
"lib": ["ES6"],
"outDir": "./build",
"strict": true,
"noImplicitAny": true,
"exclude": ["node_modules"]
Run the build script npm run build.
Run the completed index filenode ..
Thinking Like a TypeScript Developer
It can take quite a few steps to configure a tool that's integrated so heavily into a project. What can you do with your own workflow to make the process easier for yourself.

