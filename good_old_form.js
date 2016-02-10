var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/form', function (req, res) {
    res.end(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);