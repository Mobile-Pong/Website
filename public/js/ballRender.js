var BALL = {
	x: 700,
	y: 150,
	z: -1200,
	r: 30
}

var ball_l = {
	x: 0,
	y: 0
}

var ball_r = {
	x: 0,
	y: 0
}

var transformPointsBall = function (){
	ball_l = projectPoint({
		x: BALL.x - BALL.r,
		y: BALL.y,
		z: BALL.z
	});

	ball_r = projectPoint({
		x: BALL.x + BALL.r,
		y: BALL.y,
		z: BALL.z
	});
}

var renderBall = function (context){
	transformPointsBall();

	context.globalCompositeOperation = 'source-over';

	context.beginPath();
	context.arc((ball_l.x + ball_r.x) / 2, ball_r.y, (ball_r.x - ball_l.x) / 2, 0, 2 * Math.PI);
	context.fillStyle = "#FFA500";
	context.fill();
	context.lineWidth="2";
	context.strokeStyle= "#000000";
	context.stroke();
}
