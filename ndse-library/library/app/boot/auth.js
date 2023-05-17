const passport = require( 'passport');
const passportLocal = require( 'passport-local');
const usersStore = require('../store/UsersStore');
const checker = require('../utils/HashGenerator');

const verify = async (username, password, done) => {
  const user = await usersStore.getUser({ username });
  if (!user || !checker.isValid(password, user.password)) {
    return done(new Error('Неверное имя или пароль'));
  }
  return done(null, user);
}

const options = {
  usernameField: 'username',
  passwordField: 'password',
  session: false,
  passReqToCallback: false,
}

module.exports = () => {
  passport.use('local', new passportLocal.Strategy(options, verify))
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  })
  passport.deserializeUser(async (id, cb) => {
    const user = await usersStore.getUser({ id });
    cb(null, user);
  })

};
