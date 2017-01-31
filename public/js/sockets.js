var socket = io.connect();

var setEventHandlers = function() {
	// Socket connection successful
	socket.on("connect", onSocketConnected);

	// Socket disconnection
	socket.on("disconnect", onSocketDisconnect);
};

function onSocketConnected() {
    console.log("Connected to socket server");
};

function onSocketDisconnect() {
    console.log("Disconnected from socket server");
};

setEventHandlers();
