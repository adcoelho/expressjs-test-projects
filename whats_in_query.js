var express = require('express');

/*
Write a route that extracts data from query string in the GET '/search' URL
route, e.g. ?results=recent&include_tabs=true and then outputs it back to
the user in JSON format.
*/
var app = express();
app.get('/search', function (req, res) {
   res.end(JSON.stringify(req.query, function (key, value) {
       if (key == "__proto__") {
           return undefined;
       }
       return value;
   }));
});
app.listen(process.argv[2]);