var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Wypożyczalnia Książek' });
});

router.get('/login', function(req, res, next) {
  if(req.user) res.redirect('/');
  else res.render('login', { title: 'Logowanie', error_msg: [] });
});

router.get('/register', function(req, res, next) {
  if(req.user) res.redirect('/');
  else res.render('register', { title: 'Rejestracja', error_msg: [] });
});


router.get('/events', function(req, res, next) {
  res.render('events', { title: 'Wydarzenia', error_msg: [] });
});


router.get('/about-library', function(req, res, next) {
  res.render('about-library', { title: 'O bibliotece', error_msg: [] });
});


router.get('/map', function(req, res, next) {
  res.render('map', { title: 'O bibliotece', error_msg: [] });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'O bibliotece', error_msg: [] });
});

router.post('/send-message', (req, res)=> {
  var message = req.body.contact;
 
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'turqus18@gmail.com',
      pass: 'Chudy129'
    }
  });
 
  var mailOptions = {
    from: 'turqus18@gmail.com',
    to: message.recipient,
    subject: 'Formularz kontaktowy',
    html: '<b>E-mail Kontaktowy: </b>' + message.email + '<br><br>' + '<b>Imie i Nazwisko: </b>' + message.name + '<br><br>' + '<b>Wiadomość: </b>' + message.message
  };
 

  transporter.sendMail(mailOptions, function (error, info) { 
    if (error) {
      res.json('Wiadomość nie zostałą wysłana.');
    } else {
      console.log('Email sent: ' + info.response);
      res.json('Wiadomość została wysłana.');
    }
  });
});

module.exports = router;
