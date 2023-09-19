const express = require('express');
const router = express.Router();

// returnam toti userii
router.get('/', (req, res) => {
  res.send('toate taskurile');
});

// ruta de adaugare user nou
router.post('/', (req, res) => {
  res.send('About');
});

// ruta de modificare user
router.patch('/:id', (req, res) => {
  res.send('About');
});

// ruta de stergere a unui user
router.delete('/:id', (req, res) => {
  res.send('About');
});

module.exports = router;