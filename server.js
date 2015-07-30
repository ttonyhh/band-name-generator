'use strict';
//side note: we use Postman because sometimes we write the server first before the front end
// for testing, you can also split the test between front end and back end. 
// If postman passes, then you know your backend works

//need bodyparser to parse json
var express = require("express");
var bodyparser = require("body-parser");
var Adjective = require('./lib/adjective.js');
var Noun = require('./lib/noun.js');
var Verb = require('./lib/verb.js');
var getRandomWord = require('./lib/getRandomWord.js')
var postRandomWord = require('./lib/postRandomWord.js')
var app = express();
var port = process.env.PORT || 3000;

//allows the app to use bodyparser and sets its settings. 
// you'll need to put this at the beginning of evey json project
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	extended: true
}));
app.use(express.static(__dirname + "/app/"));

//make an adjective constructor function. moved to adjective.js
// we're moving functions out of the server.js file 
// because the server file should be clean and include code that does all the routing

//make an instance of that adjective object
var adjective = new Adjective();
//make a word retreival function. moved to getRandomWord.js

var verb = new Verb();

var noun = new Noun();

app.get("/", function (req, res) {
	//send index.html
	res.sendFile("index.html")
});

app.get("/adjective", function (req, res) {
	res.json(getRandomWord(adjective));
});

app.post("/adjective", function (req, res) {
	res.json(postRandomWord(req.body.word, adjective));
});

app.get("/verb", function (req, res) {
	res.json(getRandomWord(verb));
});

app.post("/verb", function (req, res) {
	res.json(postRandomWord(req.body.word, verb));
});

app.get("/noun", function (req, res) {
	res.json(getRandomWord(noun));
});

app.post("/noun", function (req, res) {
	res.json(postRandomWord(req.body.word, noun));
});

app.listen(port, function() {
	console.log('server started on port ' + port);
});