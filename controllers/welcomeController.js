var Drone = require('../models/Drone');

var index = function(req, res, next) {
  res.render('index', {title: "Hyperion", index: index, drones: drones});
  });
}

module.exports = {
  index: index
}
