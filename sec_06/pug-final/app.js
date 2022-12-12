const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//app.set()=> you may store any value that you want, but certain names can be used to configure the behavior of the server
app.set('view engine', 'pug');//this is to say use pug template engine
app.set('views', 'views');//A directory or an array of directories for the application's views.

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);
