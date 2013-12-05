var express = require('express'), 
	app = express(),
	server = require('http').createServer(app);


//app.use(express.static(path.join(__dirname + 'public')));
app.set("view options", {layout: false});
app.use(express.static(__dirname + '/public'));
app.use('views',express.static(__dirname + '/public/views'));
app.use(express.bodyParser());

var shoppingLists = {};
var id_counter = 0;

app.get('/shoppingList', function(req, res){
	res.send(shoppingLists);
});

app.get('/shoppingList/:id', function(req, res){
	res.send(shoppingLists[req.params.id]);
});

app.get('/', function(req, res){
	res.sendfile('public/views/index.html', function(err) {
		console.log(err)
	});
});

app.post('/add', function(req, res){
	shoppingLists[id_counter] = req.body
	shoppingLists[id_counter].id = id_counter
	id_counter++
	res.send('success')
});

server.listen(3000, function() {
	console.log('Server Running at \n => http://localhost:3000')
});	