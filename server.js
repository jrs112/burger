var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var path = require('path')
var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
    extended: false
}));
var PORT = process.env.PORT || 3000;


app.use(methodOverride('_method'))
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/routes.js');
app.use('/', routes);


app.listen(PORT);
console.log("connected");