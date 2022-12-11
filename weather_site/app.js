const express = require('express');
const weather = require('./utils/weather.js');
const geo = require('./utils/geo.js');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>hellow from Express<h1>');
});
app.get('/about', (req, res) => {
  res.send('hellow from about');
});
app.get('/help', (req, res) => {
  res.send('hellow from help');
});
app.get('/weather', (req, res) => {
  let location = req.query.address;
  if (!location) {
    res.send({ error: 'Address not found' });
  } else {
    geo(location)
      .then((location) => {
        weather(location.lat, location.lon)
          .then((data) => res.send(data))
          .catch((err) => res.send(err));
      })
      .catch((e) => res.send(e));
  }
});
app.get('*', (req, res) => {
  res.send('page not found');
});

app.listen(3000, () => console.log('server running on port 3000'));
