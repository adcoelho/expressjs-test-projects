var express = require('express');
var path = require('path');

var app = express();
var resource_path = path.join(__dirname, 'public');
app.use(require('stylus').middleware(process.argv[3]||resource_path));
app.use(express.static(process.argv[3]||resource_path));
app.listen(process.argv[2]);