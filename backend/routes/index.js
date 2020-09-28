const { Router } = require('express');
const router = Router();

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
module.exports = router;
