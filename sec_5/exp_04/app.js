//core module
const http = require('http');
const path = require('path');
//installed module import
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
//add new middleware function

app.use(bodyParser.urlencoded({ extended: false })); //register middleware

//outsourced routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//catch all route
app.use('/', (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '/views', '404.html'));
});

const server = http.createServer(app);

server.listen(3000);
