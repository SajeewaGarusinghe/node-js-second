exports.getLogin = (req, res, next) => {
  // console.log('>>>>>>>>>>>>>>>>',req.get('Cookie'));
  console.log(req.session.isLoggedIn);
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
  });
};
exports.postLogin = (req, res, next) => {
  // res.setHeader('Set-cookie', 'loggedIn=true ; Max-Age=1000');
  req.session.isLoggedIn = true;
  res.redirect('/');
};
// exports.postLogout = (req, res, next) => {
//   // res.setHeader('Set-cookie', 'loggedIn=true ; Max-Age=1000');
//   req.session.isLoggedIn = true;
//   res.redirect('/');
// };
