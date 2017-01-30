var util = require("util"),
    io = require('socket.io');

module.exports = {
  init: init
};

var socket,
    players;

function init() {
  players = [];

  socket = io({
    transports  : ['websocket'],
  });

  setEventHandlers();
};

var setEventHandlers = function() {
    socket.sockets.on("connection", onSocketConnection);
};

function onSocketConnection(client) {
    util.log("New player has connected: "+client.id);
    client.on("disconnect", onClientDisconnect);
};

function onClientDisconnect() {
    util.log("Player has disconnected: "+this.id);
};
