var express = require('express');
var routes = require('./src/routes/routes');

var app = express();

routes(app);

app.listen('3000');
