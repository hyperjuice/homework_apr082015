var express = require('express');
var bodyParser = require('body-parser');
var pg = require("pg");

var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

// Refactor connection and query code
var db = require("./models");

app.get('/articles', function(req,res) {
  console.log("GET /articles");
  res.send("Set up a response for this route!");
});

app.get('/articles/new', function(req,res) {
  res.render('articles/new');
});

app.post('/articles', function(req,res) {
  console.log(req.body);
  res.send("Set up a response for this route!");
});

app.get('/articles/:id', function(req, res) {
  res.send("Set up a response for this route!");
  
})

// Fill in these author routes!
app.get('/authors', function(req, res) {
	console.log("GET /authors")
	res.send("Set up a response for this route!");

});

app.get('/authors/new', function(req, res) {
	console.log("GET /authors/new")
	res.send("Set up a response for this route!");
});

app.post('/authors', function(req, res) {
	console.log(req.body);
	res.send("Set up a response for this route!");
});

app.get('/authors/:id', function(req, res) {
	console.log("GET /authors/:id")
	res.send("Set up a response for this route!");
});

app.get('/', function(req,res) {
  res.render('site/index');
});

app.get('/about', function(req,res) {
  res.render('site/about');
});

app.get('/contact', function(req,res) {
  res.render('site/contact');
});

app.listen(3000, function() {
	var msg = "* Listening on Port 3000 *";

	// Just for fun... what's going on in this code?
	/*
	 * When the server starts listening, it displays:
	 *
	 * 	**************************
	 *	* Listening on Port 3000 *
	 *	**************************
	 *
	*/
	console.log(Array(msg.length + 1).join("*"));
	console.log(msg);
	console.log(Array(msg.length + 1).join("*"));
});
