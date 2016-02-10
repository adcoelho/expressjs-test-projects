var express = require('express');

/*
Create an Express.js server that processes PUT '/message/:id' requests.
*/
var app = express();
app.put('/message/:ID', function (req, res) {
    res.end(require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + req.params.ID)
      .digest('hex'));
});
app.listen(process.argv[2]);