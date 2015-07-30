
$(function() {
	$("#button").click(function(){
		//.get is a ajax command to get a response from the server. 'adjective' is the /adjective directory on the page
		//takes in a response - could be any variable but we happen to name it response
		$.get("verb", function(response) {
			$("#verb").text(response.word);
		});

		$.get("adjective", function(response) {
			//this adjective is not the same as the adjective above. it's creating a new variable called adjective
			//.word is a property of response. It's pulling it from the word we returned in the server file
			$("#adjective").text(response.word);
		});

		$.get("noun", function(response) {
			$("#noun").text(response.word);
		});
	});

	//make an event handler that when the button is clicked, 
	// sends a POST rewuest to our server.
	$("#submitWords").on("submit", function(e) {
		//this line prevents the page reload from happening, 
		// which is the default jquery action when a button is clicked
		e.preventDefault();

		//get the text entered in the text box and save to a variable
		var adjective = $("input[name=adjective]").val();
		console.log(adjective);
		var adjectivePost;

		//this checks to see if an adjective has been inputted
		// and then posts it to the server
		if (adjective) {
			adjectivePost = {word: adjective};
			//adding adjectie to the server
			$.post('adjective', adjectivePost, function(response){
				//console.log(response);
				var adjectiveRes = response.message;
				//this sets the variable we created in the HTML to the new adjective the user inputted
				$('#adjectiveRes').text(adjectiveRes);
			});
		}

		var verb = $("input[name=verb]").val();
		console.log(verb);
		var verbPost;

		//this checks to see if an verb has been inputted
		// and then posts it to the server
		if (verb) {
			verbPost = {word: verb};
			//adding verb to the server
			$.post('verb', verbPost, function(response){
				//console.log(response);
				var verbRes = response.message;
				//this sets the variable we created in the HTML to the new verb the user inputted
				$('#verbRes').text(verbRes);
			});
		}

		var noun = $("input[name=noun]").val();
		console.log(noun);
		var nounPost;

		//this checks to see if an noun has been inputted
		// and then posts it to the server
		if (noun) {
			nounPost = {word: noun};
			//adding noun to the server
			$.post('noun', nounPost, function(response){
				//console.log(response);
				var nounRes = response.message;
				//this sets the variable we created in the HTML to the new noun the user inputted
				$('#nounRes').text(nounRes);
			});
		}
	});

});