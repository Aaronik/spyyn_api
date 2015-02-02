var express = require('express');
var routes = require('./src/routes/routes');

var app = express();

routes(app);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("The Spyyn API is now running at localhost:" + port);
});
