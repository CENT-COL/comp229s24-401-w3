// Instantiate the http module
const http = require('http');

//Http request and response function
// function requestHandler(request, response){
//     console.log('In comes a request to: ' + request.url);
//     response.end('Hello, world!');
// }

// http.createServer(requestHandler).listen(3000);

// Create a server object
http.createServer((req, res) => {
   console.log('In comes a request to: ' + req.url);
   res.writeHead(200, {
   'Content-Type': 'text/plain'
   });
   res.end('Hello World');
}).listen(3000);

console.log('Server running at http://localhost:3000/');
