var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

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
	console.log('******** File created from base64 encoded string ********');
});

app.get('/lesson', function(req, res){
	fs.readdir('./public/', function(err, files){
		res.json(files);
	});
});

app.post('/decode_base64', function(req, res){
	var photo = req.body.photo.replace(/^data:image\/\w+;base64,/, "");
	photo = photo.toString('binary');
	var filename = req.body.filename;
	fs.writeFileSync("public/decode_output/" + filename, new Buffer(photo, "base64"));
	res.send("/decode_output/" + filename);
});
