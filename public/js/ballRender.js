var PERSPECTIVE_FINAL = {
	x: 0,
	y: 0,
	z: 0
};

var BALL = {
	x: 0,
	y: 0,
	z: 0,
	r: 0
}

var ball_l = {
	x: 0,
	y: 0
}

var ball_r = {
	x: 0,
	y: 0
}

var getBall = function (){

	//Initialise Ball edge points
	BALL.x = 700,
	BALL.y = 150,
	BALL.z = -1200,
	BALL.r = 30
}


 var transformPointsBall = function (){

	var lambda_1 = PERSPECTIVE_FINAL.z / (PERSPECTIVE_FINAL.z - BALL.z) ;
	ball_l.x = PERSPECTIVE_FINAL.x + lambda_1 * (BALL.x - BALL.r - PERSPECTIVE_FINAL.x);
	ball_l.y = PERSPECTIVE_FINAL.y + lambda_1 * (BALL.y - PERSPECTIVE_FINAL.y);

	ball_r.x = PERSPECTIVE_FINAL.x + lambda_1 * (BALL.x + BALL.r - PERSPECTIVE_FINAL.x);
	ball_r.y = PERSPECTIVE_FINAL.y + lambda_1 * (BALL.y - PERSPECTIVE_FINAL.y);

}

var renderBall = function (){

	getPerspective();
	getBall();
	transformPointsBall();

	var canvas = document.getElementById("canvas");
	var c2 = canvas.getContext('2d');
	c2.globalCompositeOperation = 'source-over';

	c2.beginPath();
	c2.arc((ball_l.x + ball_r.x) / 2, ball_r.y  , (ball_r.x - ball_l.x) / 2, 0, 2 * Math.PI);
	c2.fillStyle = "#FFA500";
	c2.fill();
	c2.lineWidth="2";
	c2.strokeStyle= "#000000";
	c2.stroke();

	// console.log("ball");

}
