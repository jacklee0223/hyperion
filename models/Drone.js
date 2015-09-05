var mongoose = require('mongoose');

var DroneSchema = mongoose.Schema({
  type: String,
  name: String,
  connection_type: String,
  connection_id: String
});

module.exports = mongoose.model('Drone', DroneSchema);
