var app = require('express')();

var http = require('http').Server(app);

var io = require('socket.io')(http);



app.get('/', function(req, res){

  res.sendFile(__dirname + '/index.html');

});



app.get('/admin', function(req, res) {

	res.sendFile(__dirname + '/admin.html');

});



io.on('connection', function(socket){

	socket.on('word message', function(msg){

		io.emit('word message', msg);

	});

	socket.on('reset', function(msg) {

		io.emit('reset', 'undefined');

	});

});



io.emit('reset');



http.listen(3000, function(){

  console.log('listening on *:3000');

});
