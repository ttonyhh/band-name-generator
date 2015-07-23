'use strict';


var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

//make an adjective constructor function
var Adjective = function(){
	this.spicy = true;
	this.hot = true;
	this.salty = true;
	this.sour = true;
	this.swole = true;
	this.soft = true;
}
//make an instance of that adjective object
var adjective = new Adjective();
//make a word retreival function
var getRandomWord = function (object) {
	//need to get all properties into an array
	var array = Object.keys(object);
	//pick a random one from the array
	var randomWord = array[Math.floor(Math.random() * array.length )];
	console.log(randomWord);
	return {word: randomWord};
}

app.get("/", function (req, res) {
	res.send("hello world!");
});

app.get("/adjective", function (req, res) {
	res.json(getRandomWord(adjective));
})

app.listen(port, function() {
	console.log('server started on port ' + port);
});