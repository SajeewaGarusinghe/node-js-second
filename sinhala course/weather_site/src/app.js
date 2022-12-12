const express = require('express');
const path = require('path');
const weather = require('./utils/weather.js');
const geo = require('./utils/geo.js');

const app = express();

app.set('view engine', 'hbs');

const publicDirPath = path.join(__dirname, '../public');
app.use(express.static(publicDirPath));
//////////////////////////

app.get('/', (req, res) => {
  res.render('index', { name: 'sajeewa' });
});

/////////////////////////
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/help', (req, res) => {
  res.render('help');
});
app.get('/weather', (req, res) => {
  let location = req.query.address;
  if (!location) {
    res.render('404', { error: 'Address not found' });
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
