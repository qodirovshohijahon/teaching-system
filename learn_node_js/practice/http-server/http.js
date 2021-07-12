const http = require('http')


const server = http.createServer().listen(3000, () => {
  console.log(`Server is running in 3000`)
})




































// 1 simple web server


// const server = http.createServer((req, res) => {
// 	res.write('Welcome')
// 	res.end()
// 	console.log(req)
// })

// server.listen(3000)

// second option showing in console log

// http.createServer(function (req, res) {
// 	res.writeHead(200, {'Content-Type': 'text/html'});
//     //console.log(req.headers)
// 	//console.log(req.url)
//     //console.log(res._header)
//     res.write('Hello World from html document!');
// 	res.end();
//   }).listen(8080, () => {
// 	  console.log(`Server is running in 8080`)
//   });
  

// 2 send html document 
// If the response from the HTTP server is supposed to be displayed as HTML, 
// you should include an HTTP header with the correct content type:

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World from html document!');
//   res.end();
// }).listen(8080);

