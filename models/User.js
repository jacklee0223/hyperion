var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  name: String,
  birthday: Date,
  photo_url: String,
  type: [String],
  userDescription: String,
});

module.exports = mongoose.model('User', UserSchema);
