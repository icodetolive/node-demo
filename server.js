var express = require('express');
var app = express();


app.set('views', 
app.get('/', function(req, res){
	res.send("Sending plain text...");

	res.render('index','views');
})

app.listen(3000, function() {

	console.log("App works...!");
})