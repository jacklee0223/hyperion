$(document).ready(function() {
  var socket = io.connect('http://localhost');
  $('#ledbtn').click(function(e){
    mySocket.emit('led:on');
    e.preventDefault();
  });
});
