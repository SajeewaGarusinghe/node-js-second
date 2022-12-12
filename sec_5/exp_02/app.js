//global module
const http = require('http');
//installed module import
const express = require('express');

const app = express();

//add new middleware function
//inside app.use function will execute for every incoming request

app.use('/', (req, res, next) => {
  console.log('this always runs');
  next();
});
app.use('/about', (req, res, next) => {
  console.log('in the second  middleware');
  res.send('<h1>hellow fro second middleware</h1>'); //no need for next() since we are already sending response
});
app.use('/ass', (req, res, next) => {
  console.log('in the second  middleware');
  res.send('<h1>hellow </h1>'); //no need for next() since we are already sending response
});

const server = http.createServer(app);

server.listen(3000);
