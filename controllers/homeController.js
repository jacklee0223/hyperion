var Drone = require('../models/Drone');

var index = function(req, res) {
  res.render('index');
}

var userRender = function(req, res) {
  res.render('users/command');
};

module.exports = {
  index: index,
  userRender: userRender
}
