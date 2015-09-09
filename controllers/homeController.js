var Drone = require('../models/Drone');

var index = function(req, res) {
  res.render('index');
}

var userRender = function(req, res) {
  res.render('auth/login');
}

var commandRender = function(req, res) {
  res.render('users/command');
}

var newDroneRender = function(req, res) {
  res.render('users/newDrone');
}

var updateDroneRender = function(req, res) {
  res.render('users/editDrone');
}


module.exports = {
  index: index,
  userRender: userRender,
  commandRender: commandRender,
  newDroneRender: newDroneRender,
  updateDroneRender: updateDroneRender
}
