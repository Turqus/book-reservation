var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 

var ReservationSchema = new Schema({
  firstname: { type: String, maxlength: 202, required: true }, 
  surname: { type: String, maxlength: 202, required: true },  
  address: { type: String, maxlength: 202, required: true },  
  created: { type: Date, default: Date.now },
  
  idBook: { type: Schema.Types.ObjectId, ref: 'Book' },
  idUser: { type: Schema.Types.ObjectId, ref: 'User' },
  nameBook: { type: String, maxlength: 202, required: true },  
  description: { type: String, maxlength: 202, required: true },  
  publishingHouse: { type: String, maxlength: 202, required: true },  
  year: { type: Number, maxlength: 4, required: true },  
  sites: { type: Number, maxlength: 4 },  
    

});

module.exports = mongoose.model('Reservation', ReservationSchema);
   