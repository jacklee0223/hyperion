var five = require("johnny-five");
// var board = new five.Board({
//   port: "RN42-6703-SPP"
// });
var board = new five.Board();

board.on("ready", function() {
  // Create an Led on pin 13
  var led = new five.Led(13);
  // Blink every half second
  led.off;
});

// function ledCont() {
//   var x = document.getElementById('ledflash');
//   x.addEventListener('click', function() {
//     var led = new five.Led(13);
//     led.blink(500);
//   });
// }









