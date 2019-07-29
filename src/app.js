// server.js

//BASE SETUP
// =================================================
require('dotenv').config()
var mongoose   = require('mongoose');
var app_routing = require('./routes/index');
var express = require('express');

var app = express();

var port = 3000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

var router = express.Router();

router = require('./routes')(app, router);




app.listen(port);
console.log('Magic happens on port ' + port);

module.exports = app;