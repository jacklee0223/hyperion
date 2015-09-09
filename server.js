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
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);


// app.use
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);


// app.use(routes);

// start server
httpServer.listen(port);
console.log('http server is ' + port);
// app.listen(port);
// console.log('port ' + port);



//Arduino board connection

var board = new five.Board({
  port: "/dev/cu.usbmodem1421"
  // port: "/dev/cu.RN42-6703-SPP"
});
var led,
    wheels,
    rservo,
    lservo;

board.on("ready", function() {
  console.log('Arduino connected');
  led = new five.Led(8);
  rservo = new five.Servo(11);
  lservo = new five.Servo(12);

  // make servos static at initial
  rservo.to(90);
  lservo.to(90);


  });


//Socket connection handler
io.on('connection', function (socket) {
  console.log(socket.id);

  socket.on('led:on', function (data) {
     led.toggle();
     console.log('LED ON/OFF RECEIVED');
  });

  socket.on('led:blink', function (data) {
     led.blink(500);
     console.log('LED BLINK RECEIVED');
  });

  socket.on('servo:go', function (data) {
      rservo.min();
      lservo.max();
      console.log('Forward');

  });

  socket.on('servo:back', function (data) {
      rservo.max();
      lservo.min();
      console.log('Back');

  });

  socket.on('servo:stop', function (data) {
      rservo.to(90);
      lservo.to(90);
      console.log('Stop');

  });

  socket.on('servo:left', function (data) {
      rservo.min();
      lservo.to(90);
      console.log('left turn');

  });

  socket.on('servo:right', function (data) {
      rservo.to(90);
      lservo.max();
      console.log('right turn');

  });

});

console.log('Waiting for connection');

module.exports = app;
