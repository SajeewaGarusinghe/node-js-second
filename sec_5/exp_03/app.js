//global module
const http = require('http');
//installed module import
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//add new middleware function

app.use(bodyParser.urlencoded({ extended: false })); //register middleware

app.use('/add', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">submit</submit></button></form>'
  );
});
app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/add'); 
});

app.use('/', (req, res, next) => {
  console.log('this always runs');
  res.send('<h1>hellow from express </h1>');
});
const server = http.createServer(app);

server.listen(3000);
