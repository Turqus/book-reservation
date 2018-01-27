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
  var book = new Book(req.body.book);

  book.save()
    .then(function (calendars) {
      res.json('saved')
    })
    .catch((err) => {
      res.json('not saved')
    })
});


/* GET home page. */
router.get('/reserved-books', function (req, res, next) {
  if(req.user) res.render('reserved-books', { title: 'Zarezerwowane książki' });
  else res.redirect('/');
});

/* GET home page. */
router.get('/book/details/:id', function (req, res, next) {
  Book.find({_id : req.params.id})
  .then(function (book) { 
    if(book.length > 0) res.render('book-details', { title: 'Dodaj Książke', book: book[0] }); 
  })
  .catch((err) => {
    res.render('error', { title: 'Error 404', message: 'File not found ! 404' });
  })
});

module.exports = router;
