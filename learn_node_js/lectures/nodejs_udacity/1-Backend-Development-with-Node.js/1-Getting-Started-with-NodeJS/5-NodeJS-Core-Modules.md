See 7 - ND0067 FSJS L01 A06 Node Js Core Modules V1

ath Module
Windows
filePath = 'app\\src\\routes\\api';
Mac/Linux
filePath = 'app/src/routes/api';
In the above examples, if you were working exclusively in a Windows environment, then you could safely use that file path structure, but if a member of your team who uses a macOS or Linux system were to join the project, the filePath would no longer work for them since the syntax is different for macOS/Linux systems. Using the path module allows us to normalize paths to work across platforms.

The path module must be imported via const path = require('path');. Once imported, there are three commonly used options that you should know.

path.resolve
Enables you to get the absolute path from a relative path.

console.log(path.resolve('index.js'));

// prints /Users/user/Desktop/app/index.js
path.normalize
Normalizes any path by removing instances of . , turning double slashes into single slashes and removing a directory when .. is found.

console.log(path.normalize('./app//src//util/..'));

// prints app/src
path.join
Used to concatenate strings to create a path that works across operating systems. It joins the strings, then normalizes the result.

console.log(path.join('/app', 'src', 'util', '..', '/index.js'));

// prints  /app/src/index.js
File System Module
The File System Module is highly sophisticated and must be imported using the module system's const fs = require('fs');. File system (fs) allows for reading and writing to files with many options.

We will dive into the file system module in the last lesson. Until then, if you would like to do your own investigation work, check out the Node.js documentation on the file system module.

Other Core Modules
HTTP/HTTPS is used to transfer data. Later on, we’ll be using Express, which builds on top of this module, to create our server
URL is used for parsing and resolving URLs
TLS/SSL implements security protocols on top of OpenSSL There are more core modules worth checking out in the Node.js documentation
Further Reading
Learn more about Node.js Core Modules from the Node.js documentation.

Links 
- [x] https://nodejs.org/api/globals.html