const passport = require('passport');
const User = require('../models/User');

exports.login = (req, res) => {
  res.render('login');
};

exports.logout = (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
};

exports.googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

exports.googleCallback = passport.authenticate('google', {
  failureRedirect: '/auth/login',
  successRedirect: '/dashboard'
});

