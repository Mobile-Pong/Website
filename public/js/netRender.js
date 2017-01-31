var NET = {
	x: 50,
	y: 100,
	z: -1200,
	l: 70,
	w: 1400
}

var net_lb = {
	x: 0,
	y: 0
}

var net_lt = {
	x: 0,
	y: 0
}
var net_rb = {
	x: 0,
	y: 0
}
var net_rt = {
	x: 0,
	y: 0
}

var transformPointsNet = function (){
	net_lb = projectPoint({
		x: NET.x,
		y: NET.y,
		z: NET.z
	})

	net_rb = projectPoint({
		x: NET.x + NET.w,
		y: NET.y,
		z: NET.z
	})

	net_lt = projectPoint({
		x: NET.x,
		y: NET.y + NET.l,
		z: NET.z
	})

	net_rt = projectPoint({
		x: NET.x + NET.w,
		y: NET.y + NET.l,
		z: NET.z
	})
}

var renderNet = function (context){
	transformPointsNet();

	context.globalCompositeOperation = 'source-over';

	context.beginPath();
	context.moveTo(net_lb.x, net_lb.y);
	context.lineTo(net_lt.x, net_lt.y);
	context.lineTo(net_rt.x, net_rt.y);
	context.lineTo(net_rb.x, net_rb.y);
	context.closePath();
	context.fillStyle = "#36DC1C";
	context.fill();
}
