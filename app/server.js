var express = require('express'), 
	app = express(),
	server = require('http').createServer(app);

//app.use(express.static(path.join(__dirname + 'public')));
app.set("view options", {layout: false});
app.use(express.static(__dirname + '/public'));
app.use('views',express.static(__dirname + '/public/views'));

app.get('/', function(req, res){
	res.sendfile('public/views/index.html', function(err) {
		console.log(err)
	});
});

server.listen(3000, function() {
	console.log('Server Running at \n => http://localhost:3000')
});	