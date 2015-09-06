// load the express package and create app
var express = require('express'),
    path = require('path'),
    cors = require('cors'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    app = express(),
    mongoose = require('mongoose'),
    methodOverride = require('method-override');

// routes
var routes = require('./routes/index')
// var droneApi = require('./config/droneApi');
// var users = require('./routes/users')

var router = express.Router();

mongoose.connect('mongodb://localhost:27017/drones-app');


// view engine setup
// app.use(express.static(path.join(__dirname + 'public')));
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
// app.locals.title = "hyperion";
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

// app.get('/stylesheets/style.css', function(req, res) {
//   res.render('./')
// })

// app.use
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(path.join(__dirname, 'public')));


// app.use(routes);

//start server
app.listen(3000);
console.log('3000 is the port');

app.use('/', routes);

// app.use('/', index);
// app.get('/command', function(req, res) {
//   res.render('./users/command.html');
// });

// // routes
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname + '/views/users/index.html'));
// });

// app.get('/command', function(req, res) {
//   res.sendFile(path.join(__dirname + '/views/users/command.html'));
// });

module.exports = app;
