var express = require('express');

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