var express = require('express');
var app = express();

app.get('/hello', function(req, res) {
	res.send('Hello Travis!');
});

var server = app.listen(5555, function() {
	console.log('Listening on port %d', server.address().port);
});