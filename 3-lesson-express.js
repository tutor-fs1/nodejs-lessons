const express = require('express');
const app = express();
const taskRoutes = require('./src/routes/tasks');
const userRoutes = require('./src/routes/users');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// GET POST PATCH PUT DELETE
// app.get() app.post() app.patch() app.put() app.delete();

// app.use((req, res, next) => {
//   console.log('Primul middleware');
//   res.set('header1', 'middlware1');
//   next();
// });
// app.use((req, res, next) => {
//   console.log('Al doilea middleware');
//   res.set('header2', 'middlware2');
//   next();
// });
// app.use((req, res, next) => {
//   console.log('Al treilea middleware');
//   res.set('header3', 'middlware3');
//   next();
// });
// app.use((req, res, next) => {
//   console.log('Al patrulea middleware');
//   res.set('header4', 'middlware4');
//   next();
// });

app.get('/', (req, res) => {
  res.send("text oarecare");
  // res.send('<h1>Bine <span style="color:red">ati</span> venit la radacina acestui site!</h1>');
});

app.post('/', (req, res) => {
  const informatii = req.body;
  console.log(informatii);
  res.send('Ceva');
});

app.get('/contact', (req, res) => {
  res.send('Ai accesat endpoint-ul de contact!');
});

app.get('/todo/:altceva', (request, response) => {
  console.log('ruta mea')
  const parametriiSearch = request.query;
  response.send(`<h1>TODO</h1> Parametrul: ${request.params.altceva}`);
});

app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
