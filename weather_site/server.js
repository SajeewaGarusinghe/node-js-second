const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hellow from Express');
});
app.get('/api', (req, res) => {
  res.send('hellow from api');
});
app.get('/help', (req, res) => {
  res.send('hellow from help');
});
app.get('*', (req, res) => {
  res.send('page not found');
});

app.listen(3000, () => console.log('server running on port 3000'));
