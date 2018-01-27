var express = require('express');
var router = express.Router();

var Book = require('../model/book.model');
var Reservation = require('../model/reservation.model');


router.get('/reservation-list', (req, res) => {
  Reservation.find({ idUser: req.user._id })
    .then(function (books) {
      res.json(books)
    })
    .catch((err) => {
      console.log(err)
    })
});


router.get('/reservation-book/:id/:title', (req, res) => {
  if (req.user) {
    Book.find({ _id: req.params.id })
      .then(function (book) {
        res.render('reservation-book', { title: req.params.title, quantity: req.params.quantity, book: book[0] })
      })
      .catch((err) => {
        res.render('error', { title: 'Error 404', message: 'File not found ! 404' });
      })
  } else {
    res.redirect('/');
  }
});


router.post('/cancel-reservation', (req, res) => {
  var reservation = req.body.reservation;

  Reservation.findByIdAndRemove(reservation._id, function (err) {
    if (err) throw err;
    else {


      Book.findById(reservation.idBook, (err, book) => {
        if (err) throw err;
        if (book == null) {
          let bookObj = {
            name: reservation.nameBook,
            description: reservation.description,
            publishingHouse: reservation.publishingHouse,
            quantity: 1,
            year: reservation.year,
            sites: reservation.sites
          };

          var book = new Book(bookObj);

          book.save()
            .then(function (book) {
              res.json(book)
            })
            .catch((err) => {
              res.json('not saved')
            })
        } else if (book) {
          Book.findOneAndUpdate({ _id: book._id },
            {
              $set: {
                quantity: book.quantity + 1
              }
            },
            {
              upsert: true
            },
            ((complete) => {
              res.send('complete')
            })
          )
        }
      });
    }
  });
});





router.post('/reservation-book', (req, res) => {
  if (req.user) {
    var quantity = req.body.reservation.quantity - 1;
    delete req.body.reservation['quantity'];

    req.body.reservation.idUser = req.user._id;
    var reservation = new Reservation(req.body.reservation);

    reservation.save()
      .then(function (reservations) {
        if (quantity >= 1) {
          Book.findOneAndUpdate({ _id: req.body.reservation.idBook },
            {
              $set: {
                quantity: quantity
              }
            },
            {
              upsert: true
            },
            ((err, newUser) => {
              if (err) res.send('errror')
              else {
                res.json('Zarezerwowano książke')
              }
            })
          )
        } else {
          Book.findByIdAndRemove(req.body.reservation.idBook, function (err) {
            console.log('deleted')
          });
        }
      })
      .catch((err) => {
        res.json('not saved')
      })
  }
});

module.exports = router;
