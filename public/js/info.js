function getPlayerInfo() {
	$.post( "/getData", function( data ) {
  console.log(data);
});
}

getPlayerInfo();