var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//template engine
app.set('view engine', 'ejs');
//static files
app.use(express.static('./public'));

//fire controller
todoController(app);

app.listen(3000);
console.log("Listening 3000");