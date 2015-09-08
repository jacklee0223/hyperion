var mongoose = require('mongoose');

var DroneSchema = mongoose.Schema({
  name: String,
  type: String,
  photo_url: String,
  connection_id: String
});

module.exports = mongoose.model('Drone', DroneSchema);
