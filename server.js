//instantiate connect object
const connect = require('connect');

//instantiate the application object
const app = connect();

//middleware
function logger(request, response, next){
    console.log(request.method, request.url);
    next();
}

function goodbyeWorld(request, response, next){
    response.setHeader('Content-Type', 'text/plain');
    response.end('Goodbye World from Connect!');
}

function helloWorld(request, response, next){
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World from Connect!');
}

app.use(logger);
app.use("/goodbye",goodbyeWorld);
app.use("/",helloWorld);

app.listen(3000);

console.log('Server running at http://localhost:3000/');