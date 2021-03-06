const { Router } = require('express');
const router = Router();

const nodemailer = require('nodemailer');
const message = require('./mesage/mesage');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/services', (req, res) => {
  res.render('services/services');
});

router.get('/subscription', async (req, res) => {
  res.send(':D');
});

router.get('/review', (req, res) => {
  res.render('review/review');
});

router.post('/sucription', async (req, res) => {
  const { name, lastname, email } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cniorwebsite@gmail.com',
      pass: 'cniorwebsite123',
    },
  });

  const mailOptions = {
    from: 'cniorwebsite@gmail.com',
    to: email,
    subject: 'Prueba jeje',
    html: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
      res.redirect('/');
    }
  });
});
module.exports = router;
