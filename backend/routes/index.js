const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
	res.send('hello world');
});

router.get('/why', (req, res) => {
	res.send('why choose page');
});

router.get('/contact', (req, res) => {
	res.send('contact us page');
});

module.exports = router;
