var PERSPECTIVE_FINAL = {
	x: 0,
	y: 0, 
	z: 0  
};

var TABLE = {
	x: 0,
	y: 0,
	z: 0,
	w: 0,
	l: 0
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

var getPerspective = function (){
	
	//Make server request
	PERSPECTIVE_FINAL.x = 750;
	PERSPECTIVE_FINAL.y = 600;
	PERSPECTIVE_FINAL.z = 1500;
}

var getTable = function (){

	//Initialise table edge points
	TABLE.x = 50;
	TABLE.y = 100;
	TABLE.z = -50;
	TABLE.l = 3500;
	TABLE.w	= 1400;
}

var transformPoints = function (){
	
	var lambda_1 = PERSPECTIVE_FINAL.z / (PERSPECTIVE_FINAL.z - TABLE.z) ;	
	table_lb.x = PERSPECTIVE_FINAL.x + lambda_1 * (TABLE.x - PERSPECTIVE_FINAL.x);
	table_lb.y = PERSPECTIVE_FINAL.y + lambda_1 * (TABLE.y - PERSPECTIVE_FINAL.y);

	table_rb.x = PERSPECTIVE_FINAL.x + lambda_1 * ((TABLE.x  + TABLE.w) - PERSPECTIVE_FINAL.x);
	table_rb.y = PERSPECTIVE_FINAL.y + lambda_1 * (TABLE.y - PERSPECTIVE_FINAL.y);

	var lambda_2 = PERSPECTIVE_FINAL.z / (PERSPECTIVE_FINAL.z - (TABLE.z - TABLE.l));
	table_lt.x = PERSPECTIVE_FINAL.x + lambda_2 * (TABLE.x - PERSPECTIVE_FINAL.x);
	table_lt.y = PERSPECTIVE_FINAL.y + lambda_2 * (TABLE.y - PERSPECTIVE_FINAL.y);

	table_rt.x = PERSPECTIVE_FINAL.x + lambda_2 * ((TABLE.x + TABLE.w) - PERSPECTIVE_FINAL.x);
	table_rt.y = PERSPECTIVE_FINAL.y + lambda_2 * (TABLE.y - PERSPECTIVE_FINAL.y);
}


var renderTable = function (){
	
	getPerspective();
	getTable();
	transformPoints();

	var canvas = document.getElementById("canvas");
	var c2 = canvas.getContext('2d');
	c2.globalCompositeOperation = 'destination-over';

	c2.beginPath();
	c2.moveTo(table_lb.x, canvas.height - table_lb.y);
	c2.lineTo(table_lt.x, canvas.height - table_lt.y);
	c2.lineTo(table_rt.x, canvas.height - table_rt.y);
	c2.lineTo(table_rb.x, canvas.height - table_rb.y);
	c2.closePath();
	c2.fillStyle = "#F3E5CC";
	c2.lineWidth= "5";
	c2.strokeStyle= "#000000";
	c2.fill();
	c2.stroke();

	console.log("table");
	
}

