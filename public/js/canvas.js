//Setting up the background and the objects
var background = new Image();

//Drawing the images (will be called repeatedly, i.e manages frame rendering)
function draw(){
	var ctx = canvas.getContext("2d");
	ctx.canvas.width  = window.innerWidth - 10;
  ctx.canvas.height = window.innerHeight - 20;
	ctx.clearRect(0,0,5000,5000); // clear canvas

	renderTable(ctx);
	renderNet(ctx);
	renderBall(ctx);
	renderPaddle(ctx);
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
main();
