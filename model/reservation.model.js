var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 

var ReservationSchema = new Schema({
  firstname: { type: String, maxlength: 202, required: true }, 
  surname: { type: String, maxlength: 202, required: true },  
  address: { type: String, maxlength: 202, required: true },  
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reservation', ReservationSchema);
  