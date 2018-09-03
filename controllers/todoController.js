var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connecting to database
mongoose.connect('mongodb://test:test123@ds243502.mlab.com:43502/todo');

//creating a schema
var todoSchema = new mongoose.Schema({
	item : String
});
//creating a model
var Todo = mongoose.model('Todo', todoSchema);

var item1 = Todo({item: 'Get a job'}).save(function(err){
	if(err) throw err;
	console.log('Item Saved');
});

var urlencodedParser = bodyParser.urlencoded({extended : false});

module.exports= function(app){

	app.get('/todo', function(req, res){
		res.render('todo');
	});

	app.post('/todo', urlencodedParser, function(req, res){
		
	});

	app.delete('/todo', function(req, res){
		
	});

};