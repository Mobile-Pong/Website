var PADDLE = {
	speed : 500,
	x: 50,
	y: 100,
	z: -400,
	r: 70,
	w: 30,
	h: 130
}

var paddle_l = {
	x: 0,
	y: 0
}

var paddle_r = {
	x: 0,
	y: 0
}

var paddle_bot = {
	x: 0,
	y: 0
}

var transformPointsPaddle = function (){
	paddle_l = projectPoint({
		x: PADDLE.x - PADDLE.r,
		y: PADDLE.y,
		z: PADDLE.z
	});

	paddle_r = projectPoint({
		x: PADDLE.x + PADDLE.r,
		y: PADDLE.y,
		z: PADDLE.z
	});

	paddle_bot = projectPoint({
		x: PADDLE.x - PADDLE.w / 2,
		y: PADDLE.y - PADDLE.h,
		z: PADDLE.z
	})
}

var renderPaddle = function (context) {
	transformPointsPaddle();

	context.globalCompositeOperation = 'source-over';

	context.beginPath();
	context.lineWidth="2";
	context.rect(paddle_bot.x, paddle_l.y, (paddle_l.x + paddle_r.x) - 2 * paddle_bot.x, paddle_bot.y - paddle_l.y);
	context.strokeStyle= "#F0902F";
	context.fillStyle = "#EFBE8E";
	context.fill();
	context.stroke();

	context.beginPath();
	context.arc((paddle_l.x + paddle_r.x) / 2, paddle_l.y, (paddle_r.x - paddle_l.x) / 2, 0, 2 * Math.PI);
	context.fillStyle = "#DC1515";
	context.fill();
	context.stroke();
}

//Setting up the input
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

//Controlling the movement of the paddle
var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		//if(validateY(paddle.y - (paddle.speed * modifier)))
			PADDLE.y += PADDLE.speed * modifier;
	}
	if (40 in keysDown) { // Player holding down
		//if(validateY(PADDLE.y + PADDLE.speed * modifier))
			PADDLE.y -= PADDLE.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		//if(validateX(PADDLE.x - PADDLE.speed * modifier))
			PADDLE.x -= PADDLE.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		//if(validateX(PADDLE.x + PADDLE.speed * modifier))
			PADDLE.x += PADDLE.speed * modifier;
	}
}
