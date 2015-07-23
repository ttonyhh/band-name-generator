$(function() {
	$("#button").click(function(){
		var string = "";
		string = Math.random().toString(16);
		$("#string").text(string);
	})
});