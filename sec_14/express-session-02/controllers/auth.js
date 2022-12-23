const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  // console.log('>>>>>>>>>>>>>>>>',req.get('Cookie'));
  // console.log(req.session.isLoggedIn);
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false,
  });
};
exports.postLogin = (req, res, next) => {
  User.findById('63a33d5c5c13c55698dbbc41')
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save((err) => {
        console.log(err);
        res.redirect('/');
      });
    })
    .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect('/');
  });
};
