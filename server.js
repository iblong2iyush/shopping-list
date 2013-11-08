var express = require('express'), 
	app = express(),
	server = require('http').createServer(app);

app.use(express.static('./'));
app.get('/', function(req, res){
	res.render('app/index.html')
});

server.listen(3000);
console.log('Server Running at \n => http://localhost:3000')