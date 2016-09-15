var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(express.static(path.join(__dirname, "public")));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

server.listen('3000' | process.env.PORT, function(){
	console.log("Listening on port", server.address().port);
});

app.use('/lesson/:lesson', function(req, res, next){
	if(req.params.lesson == null){
		res.redirect('/');
	}
	console.log("go to lesson " + req.params.lesson);
	res.redirect('/'+req.params.lesson);
});

app.get('/lesson', function(req, res){
	fs.readdir('./public/', function(err, files){
		res.json(files);
	});
});
