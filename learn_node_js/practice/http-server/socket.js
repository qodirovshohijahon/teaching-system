const http = require('http')

const server = http.createServer();

server.on(`connection`, (socket) => {
  console.log(`Socket is --- ${socket}`)
})

server.listen(3000, () => {
  console.log(`Server is listening 3000`)
})
