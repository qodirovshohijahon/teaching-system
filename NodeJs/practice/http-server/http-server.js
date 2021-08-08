const http = require('http')
const fs = require('fs')

// http.createServer().listen(3000)
http.createServer(function (request, response) {
    // console.log('request.headers - ', request.headers)
    response.setHeader("Content-Type", "text/html")
    if (request.url == "/") {
        response.end('Hello from <b>home</b>')
    } else
    if (request.url == "/products") {
        response.end("<h1>Hello</h1> from <b>products</b>")
    } else 
    if (request.url == "/file") {
        let myFile = fs.readFileSync('./response.dat')
        response.end(myFile)
    }
}).listen(3000);