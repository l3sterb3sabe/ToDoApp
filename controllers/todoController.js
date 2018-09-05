var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connecting to database
mongoose.connect('mongodb://test:test123@ds243502.mlab.com:43502/todo',  { useNewUrlParser: true });

//creating a schema
var todoSchema = new mongoose.Schema({
	item : String
});
//creating a model
var Todo = mongoose.model('Todo', todoSchema);

// var item1 = Todo({item: 'Get a job'}).save(function(err){
// 	if (err) throw err;
// 	console.log('Item Saved');
//});

var urlencodedParser = bodyParser.urlencoded({extended : false});

module.exports= function(app){

	app.get('/todo', function(req, res){
		//return verything
		Todo.find({}, function(err, data){
			if(err) throw err;
			res.render('todo', {todos : data});
		});
		//return 1
		//Todo.find({item : 'buy milk'});
	});

	app.post('/todo', urlencodedParser, function(req, res){
		//get data from view and add to mongodb
		console.log(req.body);
		var newTodo = Todo(req.body).save(function(err,data){
			if(err) throw err;
			res.redirect('back');
		});
	});

	app.delete('/todo/:item', function(req, res){
		//delete requested item from mongodb
		Todo.find({item: (req.params.item).replace(/-/g, " ")}).deleteOne(function(err,data){
			if(err) throw err;
			res.json(data);
		});
	});

};