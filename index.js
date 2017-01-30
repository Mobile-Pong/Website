'use strict';
const express = require('express');
const socketIO = require('socket.io');
//     sockets = require('./sockets');
var app = express();
var server = require('http').createServer(app),
    io = require('socket.io').listen(server);

server.listen(process.env.PORT || 5000);

// app.set('port', (process.env.PORT || 5000));

// public is directory for all view files
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const server = app.listen(process.env.PORT || 5000, function() {
  console.log('Node app is running on port', app.get('port'));
});

app.get('/', function(request, response) {
  response.render('pages/index');
});

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);

//
// sockets.init();
