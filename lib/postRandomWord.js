'use strict'

module.exports = function (word, wordObject) {
	//check if the word is on the object
	//if it is not on the object, add it and send a message that we added it
	//if it is already on the object, send a polite message saying we have it
	if (!wordObject.hasOwnProperty(word)) {
		//adds word to the list
		wordObject[word] = true;
		//return confirmation message. 
		//we don't need a else statement after this code because 'return' terminates the code
		return {message: "Thanks! " + word + " has been added to the list!"};
	}
	//no 'else' needed since if the word is added, there is a return that executes and ends the loop
	return {message: "We already have your word, " + word + " on the list."}

	//those messages will be the return value of this function
}