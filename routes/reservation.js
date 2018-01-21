var express = require('express');
var router = express.Router();

var Book = require('../model/book.model');
var Reservation = require('../model/reservation.model');

 router.get('/reservation-book/:id/:title/:quantity', (req, res)=> {
  console.log(req.params)

  res.render('reservation-book', { title: 'Rezerwacja Książki', title : req.params.title, quantity : req.params.quantity })
 });


 router.post('/reservation-book', (req, res)=> {
    console.log(req.body);

    var reservation = new Reservation(req.body.reservation);

    reservation.save()
    .then(function (reservations) {
        res.json('saved')
      })
      .catch((err) => {
        res.json('not saved')
      })
 });

module.exports = router;
