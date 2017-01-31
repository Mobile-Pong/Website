const socketIO = require('socket.io');
var util = require("util");

module.exports = {
  init: init
};

var players, io;

function init(server) {
  players = [];

  setEventHandlers(server);
};

function setEventHandlers(server) {
  io = socketIO.listen(server);
  io.sockets.on('connection', onSocketConnection);
}

function onSocketConnection(client) {
    util.log("New player has connected: "+client.id);
    client.on("disconnect", onClientDisconnect);
};

function onClientDisconnect() {
    util.log("Player has disconnected: "+this.id);
};
