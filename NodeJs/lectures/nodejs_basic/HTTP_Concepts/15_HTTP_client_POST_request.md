So far we have been using GET requests to receive data from a server. GET requests are able to be used to receive data but you can not send data with a GET request. In order to send a body of data with a request you must use a POST request. POST requests are generally used to upload data or to send data to be processed and returned.

The http core module methods allow you to specify what type of request you want to make. To do so, first create an options object and set the method attribute to the desired request type (‘POST’, 'GET', etc.). Then, use the options object as the first argument when calling http.request().

The following code from http-post.js uses an options object to specify that it is trying to make a POST request:

```js
const http = require('http')
const postData = JSON.stringify({ foo: 'bar' })

const options = {
  hostname: 'mockbin.com',
  port: 80,
  path: '/request?foo=bar&foo=baz',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
}

const req = http.request(options, (res) => {
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`)
  })
  res.on('end', () => {
    console.log('No more data in response.')
  })
})

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`)
})

req.write(postData)
req.end()
```

As a result, the script will send the data to the server (mockbin.com) in a POST request, and output the response of the request.
