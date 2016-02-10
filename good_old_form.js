var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

/*
Write a route ('/form') that processes HTML form input
(<form><input name="str"/></form>) and prints backwards the str value.
*/
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/form', function (req, res) {
    res.end(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);