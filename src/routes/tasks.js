const express = require('express');
const router = express.Router();

// returnam toate taskurile
router.get('/', (req, res) => {
  res.send('toate taskurile');
});

// ruta de adaugare task nou
router.post('/', (req, res) => {
  res.send('About');
});

// ruta de modificare task
router.patch('/:id', (req, res) => {
  res.send('About');
});

// ruta de stergere a unui task
router.delete('/:id', (req, res) => {
  res.send('About');
});

module.exports = router;