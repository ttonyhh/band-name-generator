'use strict';

module.exports = function (object) {
	//need to get all properties into an array
	var array = Object.keys(object);
	//pick a random one from the array
	var randomWord = array[Math.floor(Math.random() * array.length )];
	console.log(randomWord);
	return {word: randomWord};
}