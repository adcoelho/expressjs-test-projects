var express = require('express');

/*
Create an Express.js app that outputs "Hello World!" when somebody goes to /home.
*/
var app = express();
app.get('/home', function (request, response) {
   response.end('Hello World!'); 
});
app.listen(process.argv[2]);