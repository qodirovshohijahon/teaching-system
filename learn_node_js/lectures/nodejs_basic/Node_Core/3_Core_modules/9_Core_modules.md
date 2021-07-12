Core Modules
Core modules come with Node.js and don't need to be installed. Core modules provide low-level functionality and helper methods. They allow Node.js to work with the filesystem, networking, binary data, streams, spawn external processes, parse query strings, file paths and URLs, and perform other helpful tasks such as creating HTTP(S) agents/clients and servers.

Here's the list of main core modules:

- [x]  fs: module to work with the file system, files and folders
- [x]   path: module to parse file system paths across platforms
- [x]   querystring: module to parse query string data
- [x] net: module to work with networking for various protocols
- [x]   stream: module to work with data streams
- [x] events: module to implement event emitters (Node observer pattern)
- [x]   child_process: module to spawn external processes
- [x]   os: module to access OS-level information including platform, number of CPUs, memory, uptime, etc.
- [x]   url: module to parse URLs
- [x]   http: module to make requests (client) and - [x]accept requests (server)
- [x]   https: module to do the same as http only for HTTPS
- [x] util: various utilities including promosify which turns any standard Node core method into a promise-base API
- [x]   assert: module to perform assertion based testing
- [x]   crypto: module to encrypt and hash information


There is no need to install or download core modules. To include them in your application, all you need is to use the following syntax:

```js
const http = require('http') //replace `http` with the core module you want to use
```
