'use strict';
const express = require('express');
const sockets = require('./sockets');

var port = process.env.PORT || 3000;
var app = express();
var server = require('http').createServer(app);

server.listen(port);

// public is directory for all view files
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

sockets.init(server);
