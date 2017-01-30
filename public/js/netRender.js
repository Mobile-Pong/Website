var PERSPECTIVE_FINAL = {
	x: 0,
	y: 0,
	z: 0
};

var NET = {
	x: 0,
	y: 0,
	z: 0,
	w: 0,
	l: 0
}

var NET_lb = {
	x: 0,
	y: 0
}

var NET_lt = {
	x: 0,
	y: 0
}
var NET_rb = {
	x: 0,
	y: 0
}
var NET_rt = {
	x: 0,
	y: 0
}

var getNET = function (){

	//Initialise net edge points
	NET.x = 50;
	NET.y = 100;
	NET.z = -1200;
	NET.l = 70;
	NET.w = 1400;
}

var transformPointsNet = function (){

	var lambda_1 = PERSPECTIVE_FINAL.z / (PERSPECTIVE_FINAL.z - NET.z) ;
	NET_lb.x = PERSPECTIVE_FINAL.x + lambda_1 * (NET.x - PERSPECTIVE_FINAL.x);
	NET_lb.y = PERSPECTIVE_FINAL.y + lambda_1 * (NET.y - PERSPECTIVE_FINAL.y);

	NET_rb.x = PERSPECTIVE_FINAL.x + lambda_1 * ((NET.x  + NET.w) - PERSPECTIVE_FINAL.x);
	NET_rb.y = PERSPECTIVE_FINAL.y + lambda_1 * (NET.y - PERSPECTIVE_FINAL.y);

	var lambda_2 = PERSPECTIVE_FINAL.z / (PERSPECTIVE_FINAL.z - NET.z);
	NET_lt.x = PERSPECTIVE_FINAL.x + lambda_2 * (NET.x - PERSPECTIVE_FINAL.x);
	NET_lt.y = PERSPECTIVE_FINAL.y + lambda_2 * (NET.y + NET.l  - PERSPECTIVE_FINAL.y);

	NET_rt.x = PERSPECTIVE_FINAL.x + lambda_2 * ((NET.x + NET.w) - PERSPECTIVE_FINAL.x);
	NET_rt.y = PERSPECTIVE_FINAL.y + lambda_2 * (NET.y + NET.l - PERSPECTIVE_FINAL.y);
}


var renderNet = function (){

	getPerspective();
	getNET();
	transformPointsNet();

	var canvas = document.getElementById("canvas");
	var c2 = canvas.getContext('2d');
	c2.globalCompositeOperation = 'source-over';

	c2.beginPath();
	c2.moveTo(NET_lb.x, canvas.height - NET_lb.y);
	c2.lineTo(NET_lt.x, canvas.height - NET_lt.y);
	c2.lineTo(NET_rt.x, canvas.height - NET_rt.y);
	c2.lineTo(NET_rb.x, canvas.height - NET_rb.y);
	c2.closePath();
	c2.fillStyle = "#36DC1C";
	c2.fill();

	// console.log("net");


}
