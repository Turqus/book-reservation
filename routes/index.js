var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Wypożyczalnia Książek' });
});

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Logowanie', error_msg: [] });
});

/* GET home page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Rejestracja', error_msg: [] });
});



module.exports = router;
