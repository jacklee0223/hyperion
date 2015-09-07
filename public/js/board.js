var five = require("johnny-five");
var board = new five.Board({
  port: "/dev/cu.usbmodem1421"
});
// // var board = new five.Board();

// // board.on("ready", function() {
// //   // Create an Led on pin 13
// //   var led = new five.Led(7);
// //   // Blink every half second
// //   led.blink(500);
// // });

board.on("ready", function() {
  var led = new five.Led(11);

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  this.repl.inject({
    led: led
  });
});

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

// // //Serial Port
// // var serialPort = require("johnny-five/node_modules/serialport");

// // // init
// // document.addEventListener("DOMContentLoaded", function() {
// //   // close window button
// //   $("#closeWindow").click(function() {
// //     win.close();
// //   });

// var board = new five.Board({
//   port: "RN42-6703-SPP"
// });




// $('button').click(function(){
//   // var led = new five.Led(13);
//   this.repl.inject({
//     led.blink(500);
//   });
// })

//     // show serial port name
//       $("#labelPort").text(portName);
//       $("#labelPort").removeClass("btn-default").addClass("btn-primary");
//     });

//     // when serial port error
//     board.on("error", function(err) {
//       // show error message
//       $("#labelPort").removeClass("btn-primary btn-default").addClass("btn-danger");
//       $("#labelPort").text("Error!");
//       // remove error message and return to normal state
//       setTimout(function() {
//         $("#labelPort").removeClass("btn-danger").addClass("btn-default");
//         $("#labelPort").text("Ports");
//       }, 5000);
//     });

//   });

// });

// // show serial ports names
// $("#serialPorts").html(html);

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


