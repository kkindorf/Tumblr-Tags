var port = process.env.PORT || 3000;
var express = require('express');
var app = express();
app.use(express.static('build'));
app.listen(port, function(){
	console.log('app listening on port '+port)
})
exports.app = app;

