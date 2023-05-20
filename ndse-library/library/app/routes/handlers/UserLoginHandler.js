const passport = require( 'passport');

module.exports = async (req, res, next) => {
  passport.authenticate('local', function (err, user) {
    if (err || !user) {
      return res.render('user/login', {
        title: "Авторизация",
        user: req.body,
        error: "Неверное имя пользователя или пароль",
      });
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.redirect('/');
    });
  })(req, res, next);
};
