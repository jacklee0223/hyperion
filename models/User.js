var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  name: String,
  birthday: Date,
  type: [String],
  userDescription: String,
});

module.exports = mongoose.model('User', UserSchema);
