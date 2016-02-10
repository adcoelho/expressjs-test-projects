var express = require('express');
var fs = require('fs');

/*
Write a server that reads a file, parses it to JSON and outputs the content
to the user.
The port is passed in process.argv[2].  The file name is passed in process.argv[3].
Everything should match the '/books' resource path.
*/
var app = express();
app.get('/books', function (req, res) {
    fs.readFile(process.argv[3], function (err, data) {
        if (err) return res.sendStatus(500);
        res.json(JSON.parse(data));
    });
});
app.listen(process.argv[2]);