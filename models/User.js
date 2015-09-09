var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  name: String,
  type: [String],
  userDescription: String,
});

module.exports = mongoose.model('User', UserSchema);
