var five = require("johnny-five");
var board = new five.Board({
  port: "/dev/cu.usbmodem1421"
});
//Serial Port
var serialPort = require("serialport");
// // var board = new five.Board();

// // board.on("ready", function() {
// //   // Create an Led on pin 13
// //   var led = new five.Led(7);
// //   // Blink every half second
// //   led.blink(500);
// // });

board.on("ready", function() {
  var led = new five.Led(8);
  var servo = new five.Servo({
    pin: 11,
    type: "continuous",
    center: true
  });
  var piezo = new five.Piezo(9);

  servo.to(94);

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  this.repl.inject({
    led: led,
    servo: servo,
    piezo: piezo
  });

  piezo.play({
    // song is composed by an array of pairs of notes and beats
    // The first argument is the note (null means "no note")
    // The second argument is the length of time (beat) of the note (or non-note)
    song: [
      // ["E4", 2/4],
      // ["E4", 2/4],
      // ["D4", 1/4],
      // ["null", 1/4],
      // ["E4", 2/4],
      // ["E4", 2/4],
      // ["D4", 1/4],
      // ["null", 1/4],
      // ["E4", 2/4],
      // ["E4", 2/4],
      // ["D4", 1/4],
      // ["null", 1/4],
      // ["E4", 1/4],
      // ["null", 1/4],
      // ["A4", 1/4],
      // ["B4", 1/4],

      // ["null", 1/4],

      // ["E4", 2/4],
      // ["E4", 2/4],
      // ["D4", 1/4],
      // ["null", 1/4],
      // ["E4", 2/4],
      // ["E4", 2/4],
      // ["D4", 1/4],
      // ["null", 1/4],
      // ["E4", 1/4],
      // ["null", 1/4],
      // ["A4", 2/4],
      // ["B4", 2/4],
      // ["C4", 3/4],

      // ["C4", 1 / 4],
      // ["D4", 1 / 4],
      // ["F4", 1 / 4],
      // ["D4", 1 / 4],
      // ["A4", 1 / 4],
      // [null, 1 / 4],
      // ["A4", 1],
      // ["G4", 1],
      // [null, 1 / 2],
      // ["C4", 1 / 4],
      // ["D4", 1 / 4],
      // ["F4", 1 / 4],
      // ["D4", 1 / 4],
      // ["G4", 1 / 4],
      // [null, 1 / 4],
      // ["G4", 1],
      // ["F4", 1],
      // [null, 1 / 2]
    ],
    tempo: 100
  });

});

  // servo.stop();


// // function ledCont() {
// //   var x = document.getElementById('ledflash');
// //   x.addEventListener('click', function() {
// //     var led = new five.Led(13);
// //     led.blink(500);
// //   });
// // }

// // // node-webkit
// // var gui = require("nw.gui");
// // var win = gui.Window.get();

// // //Johnny-five
// // var five = require("johnny-five"),
// //     board = new five.Board(),
// //     led = new five.Led(13),
// //     motor;



// var STOP_SPEED = 90;
// var leftSpeed = STOP_SPEED;
// var rightSpeed = STOP_SPEED;

// function BoEBot(pinLeft, pinRight){
//   this.leftServo = new j5.Servo({
//     pin: pinLeft,
//     type: "continuous"
//   });

//   this.rightServo = new j5.Servo({
//     pin: pinRight,
//     type: "continuous"
//   });
// }

// BoEBot.prototype.setSpeed = function(leftSpeed, rightSpeed){
//   this.leftServo.to(leftSpeed);
//   this.rightServo.to(rightSpeed);
// }

// BoEBot.prototype.fwd = function(speed){
//   if (!speed){ speed = 1};

//   leftSpeed = STOP_SPEED - speed;
//   rightSpeed = STOP_SPEED + speed;
//   this.setSpeed(leftSpeed, rightSpeed);
// };

// BoEBot.prototype.back = function(speed){
//   if (!speed){ speed = 1};
//   this.fwd(-speed);
// };

// BoEBot.prototype.stop = function(){
//   leftSpeed = STOP_SPEED;
//   rightSpeed = STOP_SPEED;
//   this.setSpeed(leftSpeed, rightSpeed);
// };

// BoEBot.prototype.left = function(speed){
//   if (!speed){ speed = 1};

//   leftSpeed = leftSpeed - speed;
//   this.setSpeed(leftSpeed, rightSpeed);
// };

// BoEBot.prototype.right = function(speed){
//   if (!speed){ speed = 1 };

//   rightSpeed = rightSpeed + speed;
//   this.setSpeed(leftSpeed, rightSpeed);
// };

// BoEBot.prototype.spinRight = function(speed){
//   if (!speed){ speed = 1 };

//   leftSpeed = STOP_SPEED + speed;
//   rightSpeed = STOP_SPEED + speed;
//   this.setSpeed(leftSpeed, rightSpeed);
// }

// BoEBot.prototype.spinLeft = function(speed){
//   if (!speed){ speed = 1 };

//   leftSpeed = STOP_SPEED - speed;
//   rightSpeed = STOP_SPEED - speed;
//   this.setSpeed(leftSpeed, rightSpeed);
// }

// module.exports = BoEBot;


// var Cylon = require("cylon");

// // Initialize the robot
// Cylon.robot({
//   // Change the port to the correct port for your Arduino.
//   connections: {
//     arduino: { adaptor: 'firmata', port: '/dev/cu.RN42-6703-SPP' }
//   },

//   devices: {
//     led: { driver: 'led', pin: 7 }
//   },

//   work: function(my) {
//     every((1).second(), function() {
//       my.led.toggle();
//     });
//   }
// }).start();


