var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/app', function (req,res){
	res.sendFile(path.join(__dirname, 'views/app.html'));
};
