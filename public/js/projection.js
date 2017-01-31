var PERSPECTIVE_LOC = {
	x: 750,
	y: 600,
	z: 1500
};

function projectPoint(point) {
	lambda = PERSPECTIVE_LOC.z / (PERSPECTIVE_LOC.z - point.z);

	return {
		x: projectCoord(point.x, PERSPECTIVE_LOC.x, lambda),
		y: canvas.height - projectCoord(point.y, PERSPECTIVE_LOC.y, lambda)
	};
}

function projectCoord(point_coord, perpective_coord, lambda) {
	return perpective_coord + lambda * (point_coord - perpective_coord);
}
