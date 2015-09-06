// // var five = require("johnny-five");
// // var board = new five.Board({
// //   port: "RN42-6703-SPP"
// // });
// // var board = new five.Board();

// // board.on("ready", function() {
// //   // Create an Led on pin 13
// //   var led = new five.Led(13);
// //   // Blink every half second
// //   led.blink(500);
// // });

// // function ledCont() {
// //   var x = document.getElementById('ledflash');
// //   x.addEventListener('click', function() {
// //     var led = new five.Led(13);
// //     led.blink(500);
// //   });
// // }

// // node-webkit
// var gui = require("nw.gui");
// var win = gui.Window.get();

// //Johnny-five
// var five = require("johnny-five"),
//     board = new five.Board(),
//     led = new five.Led(13),
//     motor;

// //Serial Port
// var serialPort = require("johnny-five/node_modules/serialport");

// // init
// document.addEventListener("DOMContentLoaded", function() {
//   // close window button
//   $("#closeWindow").click(function() {
//     win.close();
//   });

// // var board = new five.Board({
// //   port: "RN42-6703-SPP"
// // });


// // board.on("ready", function() {
// //   var led = new five.Led(13);

// //   // This will grant access to the led instance
// //   // from within the REPL that's created when
// //   // running this program.
// //   this.repl.inject({
// //     led: led
// //   });

// // });

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


