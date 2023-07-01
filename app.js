const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const { createInCrud, updateInCrud, deleteInCrud } = require('./db');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.post('/post', (req, res) => {
  let id = req.body.id;
  let names = req.body.names;
  let email = req.body.email;

  createInCrud(id, names, email);
  res.send(201, 'posted');
});

app.post('/update', (req, res) => {
  let id = req.body.id;
  let names = req.body.names;
  let email = req.body.email;

  updateInCrud(id, names, email);
  res.send(201, 'updated');
});

app.post('/delete', (req, res) => {
  let id = req.body.id;

  deleteInCrud(id);
  res.send(201, 'deleted');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Operation is successful' });
});

app.listen(3000, () => {
  console.log("The server is running on port 3000");
});