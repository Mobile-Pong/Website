function getPlayerInfo() {
	$.post( "/getData", {player_id : 1}, function( data ) {
  data = JSON.parse();
  console.log(data);
});
}

getPlayerInfo();