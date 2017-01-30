// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
