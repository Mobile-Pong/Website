var TABLE = {
	x: 50,
	y: 100,
	z: -50,
	l: 3500,
	w: 1400
}

var table_lb = {
	x: 0,
	y: 0
}

var table_lt = {
	x: 0,
	y: 0
}

var table_rb = {
	x: 0,
	y: 0
}

var table_rt = {
	x: 0,
	y: 0
}

var transformPointsTable = function (){
	table_lb = projectPoint({
		x: TABLE.x,
		y: TABLE.y,
		z: TABLE.z
	})

	table_rb = projectPoint({
		x: TABLE.x + TABLE.w,
		y: TABLE.y,
		z: TABLE.z
	})

	table_lt = projectPoint({
		x: TABLE.x,
		y: TABLE.y,
		z: TABLE.z - TABLE.l
	})

	table_rt = projectPoint({
		x: TABLE.x + TABLE.w,
		y: TABLE.y,
		z: TABLE.z - TABLE.l
	})
}


var renderTable = function (context){
	transformPointsTable();

	context.globalCompositeOperation = 'destination-over';

	context.beginPath();
	context.moveTo(table_lb.x, table_lb.y);
	context.lineTo(table_lt.x, table_lt.y);
	context.lineTo(table_rt.x, table_rt.y);
	context.lineTo(table_rb.x, table_rb.y);
	context.closePath();
	context.fillStyle = "#F3E5CC";
	context.lineWidth= "5";
	context.strokeStyle= "#000000";
	context.fill();
	context.stroke();
}
