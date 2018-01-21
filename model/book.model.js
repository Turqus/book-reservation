var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 

var BookSchema = new Schema({
  name: { type: String, maxlength: 202, required: true },
  // img: { type: String, maxlength: 202, required: true },
  description: { type: String, maxlength: 202, required: true }, 
  quantity: { type: Number, maxlength: 3 },
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Book', BookSchema);
  