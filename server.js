var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req,res){
	res.sendFile(path.join(__dirname, 'views/app.html'));
};
	
var server = app.listen(app.get('port'), function(){
 console.log('Server listening on port ',app.get('port'));
});

