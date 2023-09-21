const express = require('express');
const dotEnv = require('dotenv');
const morgan = require('morgan');
dotEnv.config();
const app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  let message = 'Suntem pe PRODUCTION';
  if (process.env.NODE_ENV === 'dev') {
    console.log('Suntem pe DEV');
  }
  res.send(message);
});


app.get('/alta-ruta', (req, res) => {
  res.send('alta ruta');
});

// http://api-ul-meu.com/tasks
// METODA: GET
// returnam toate resursele
// optional: query parameters: http://api-ul-meu.com/tasks?completed=true
// returnam toate resursele dupa ce le filtram in urma acestor parameteri
app.get('/tasks/', (req, res) => {
  res.status(200);
  res.json({});
});


// http://api-ul-meu.com/tasks
// METODA: POST
// introduce o noua resursa, informatiile vin din body-ul requestului
// neaparat trebui sa revalidam informatiile primite in body
app.post('/tasks/', (req, res) => {
  // req.body --- doar daca si folosim middleware urlencode si json (bezi fisierul 3-lesson-express.js)
  res.json({});
});

// http://api-ul-meu.com/tasks/47
// METODA: GET
// returneaza o singura resursa, cu identificatorul unic id/slug
app.get('/tasks/:id', (req, res) => {
  // req.body --- doar daca si folosim middleware urlencode si json (bezi fisierul 3-lesson-express.js)
  res.send('About');
});

// http://api-ul-meu.com/tasks/47
// METODA: DELETE
// sterge resursa, cu identificatorul unic id/slug
app.delete('/tasks/:id', (req, res) => {
  res.send('About');
});

// http://api-ul-meu.com/tasks/47
// METODA: PATCH
// actualizeaza resursa partial
// neaparat trebui sa revalidam informatiile primite in body { "completed": false }
app.patch('/tasks/:id', (req, res) => {
  res.send('About');
});


// http://api-ul-meu.com/tasks/47
// METODA: PUT
// inlocuieste total resursa
// neaparat trebui sa revalidam informatiile primite in body, obiectul trebuie sa aiba toate detaliile resursei
router.put('/:id', (req, res) => {
  res.send('About');
});

// http://api-ul-meu.com/tasks/
// METODA: PUT
// neaparat trebui sa revalidam informatiile primite in body, obiectul trebuie sa aiba toate detaliile resursei
router.put('/', (req, res) => {
  const { id } = req.body;
});

// ruta de modificare task
router.patch('/:id', (req, res) => {
  res.send('About');
});




app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});