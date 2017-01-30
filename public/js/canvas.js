//Setting up the background and the objects
var background = new Image();
var paddle = {
	speed : 500,
	x: 50,
	y: 50,
	r: 70,
	a: 0,
	b: 2*Math.PI,
	width: 30,
	height: 130
};
var socket;

var canvas = document.getElementById("canvas");
console.log(canvas);

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
	paddle.y = 4 * canvas.height / 5;
}

//Controlling the movement of the paddle
var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		//if(validateY(paddle.y - (paddle.speed * modifier)))
			paddle.y -= paddle.speed * modifier;
	}
	if (40 in keysDown) { // Player holding down
		//if(validateY(paddle.y + paddle.speed * modifier))
			paddle.y += paddle.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		//if(validateX(paddle.x - paddle.speed * modifier))
			paddle.x -= paddle.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		//if(validateX(paddle.x + paddle.speed * modifier))
			paddle.x += paddle.speed * modifier;
	}
}

//Drawing the images (will be called repeatedly, i.e manages frame rendering)
function draw(){




	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0,5000,5000); // clear canvas

	renderTable();
	renderNet();
	renderBall();

	if((paddle.x >= 0) && (paddle.x <= canvas.width) && (paddle.y >= 0) && (paddle.y <= canvas.height)){
		ctx.globalCompositeOperation = 'source-over';
		ctx.beginPath();
		ctx.lineWidth="2";
		ctx.rect(paddle.x - paddle.width / 2, paddle.y, paddle.width,  paddle.height);
		ctx.strokeStyle= "#F0902F";
		ctx.fillStyle = "#EFBE8E";
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(paddle.x, paddle.y, paddle.r, paddle.a, paddle.b);
		ctx.fillStyle = "#DC1515";
		ctx.fill();
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
