//Setting up the background and the objects

var background = new Image();
var paddle = {
	speed : 500,
	x: 50,
	y: 50, 
	r: 100,
	a: 0,
	b: 2*Math.PI
};

var canvas = document.createElement("canvas");
canvas.width = 1500;
canvas.height = 650;
document.body.appendChild(canvas);

//Setting up the input
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

//Resetting the game
var reset = function () {
	paddle.x = canvas.width / 2;
	paddle.y = canvas.height / 2;
}

//Controlling the movement of the paddle
var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		paddle.y -= paddle.speed * modifier;
	}
	if (40 in keysDown) { // Player holding down
		paddle.y += paddle.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		paddle.x -= paddle.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		paddle.x += paddle.speed * modifier;
	}
}

//Drawing the images (will be called repeatedly, i.e manages frame rendering)
function draw(){

	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0,5000,5000); // clear canvas	

	ctx.beginPath();
	if((paddle.x >= 0) && (paddle.x <= canvas.width) && (paddle.y >= 0) && (paddle.y <= canvas.height)){
		ctx.arc(paddle.x, paddle.y, paddle.r, paddle.a, paddle.b);
		ctx.stroke();
	}


}

//Main function, that is looped

var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	
	draw();

	then = now;

	// Request to do this again, after 5 ms

	setTimeout(function() {
		requestAnimationFrame(main);
	}, 5);
};



//Running the program
var then = Date.now();
reset();
main();