var express = require('express');
var router = express.Router();

var Book = require('../model/book.model');


router.get('/list-books', (req, res) => {
  Book.find({})
    .then((books) => {
      res.json(books);
    })
    .catch((err) => {
      console.log(err);
    })
});


/* GET home page. */
router.get('/books', function (req, res, next) {
  res.render('books', { title: 'Lista Książek' });
});


/* GET home page. */
router.get('/add-book', function (req, res, next) {
  res.render('addBook', { title: 'Dodaj Książke' });
});


router.post('/add-book', (req, res) => {
  console.log(req.body);

  var book = new Book(req.body.book);

  book.save()
    .then(function (calendars) {
      res.json('saved')
    })
    .catch((err) => {
      res.json('not saved')
    })
});

module.exports = router;
