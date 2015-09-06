var Drone = require('../models/Drone');

var index = function(req, res) {
  res.render('index');
}
// var userRender = function(req, res) {
//   res.sendfile('./public/views/users/command.html');
// };


module.exports = {
  index: index
}
