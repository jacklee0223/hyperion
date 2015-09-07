var five = require("johnny-five");
var board = new five.Board();
board.on("ready", function() {
  new five.Servo.Continuous(11).stop();
});
