// load the express package and create app
var express = require('express'),
    app = express(),
    path = require('path'),
    cors = require('cors'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    methodOverride = require('method-override'),
    five = require("johnny-five"),
    httpServer = require("http").createServer(app),
    io = require('socket.io')(httpServer);
    port = 3000;

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
// app.listen(port);
// console.log('port ' + port);

httpServer.listen(port);
console.log('http server is' + port);

app.use('/', routes);

//Arduino board connection

// var board = new five.Board();
var board = new five.Board({
  port: "/dev/cu.usbmodem1421"
});
var led,
    wheels,
    rservo,
    lservo;
// var servo = new five.Servo({
//     pin: 11,
//     type: "continuous"
//   });
board.on("ready", function() {
  console.log('Arduino connected');
  led = new five.Led(8);
  rservo = new five.Servo(11);
  lservo = new five.Servo(12);

  rservo.to(94);
  lservo.to(95);
  // wheels = {};
  // wheels.left = new five.Servo({
  //   pin: 12,
  //   type: "continuous"
  // });
  // wheels.right = new five.Servo({
  //   pin: 11,
  //   type: "continuous",
  //   invert: true
  });


//   wheels.both = new five.Servos().to(94);
// });

//Socket connection handler
io.on('connection', function (socket) {
  console.log(socket.id);

  socket.on('led:on', function (data) {
     led.on();
     console.log('LED ON RECEIVED');
  });

  socket.on('led:off', function (data) {
      led.off();
      console.log('LED OFF RECEIVED');

  });

  socket.on('servo:go', function (data) {
      rservo.min();
      lservo.max();
      console.log('LED OFF RECEIVED');

  });

  socket.on('servo:stop', function (data) {
      rservo.to(94);
      lservo.to(95);
      console.log('LED OFF RECEIVED');

  });

});

console.log('Waiting for connection');

module.exports = app;
