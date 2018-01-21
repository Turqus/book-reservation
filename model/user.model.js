var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bcrypt = require('bcrypt');

var UserSchema = new Schema({
  username: { type: String, maxlength: 20, required: true, unique: true },
  password: { type: String, maxlength: 202, required: true },
  email: { type: String, maxlength: 20, required: true }, 
  updated: { type: Date, default: Date.now },
  created: { type: Date, default: Date.now },
  role: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  console.log(candidatePassword)
  bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
}