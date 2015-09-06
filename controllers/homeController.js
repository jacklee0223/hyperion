var Drone = require('../models/Drone');

var index = function(req, res) {
    res.render('index');
}


module.exports = {
  index: index
}
