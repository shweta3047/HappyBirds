const express = require('express');
const router = express.Router();
const quotes = require('../../constants/quotes');

router.get('/all', (req, res) => {
  return res.json(quotes);
});

router.get('/', (req, res) => {
  const random_no = Math.floor(Math.random() * Math.floor(10));
  return res.json(quotes[random_no]);
});

module.exports = router;
