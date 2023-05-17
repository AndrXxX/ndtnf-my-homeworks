const usersStore = require('../store/UsersStore');

module.exports = async (req, res, next) => {
  let user = await usersStore.getUser({ username: req.body.user.username });
  if (user) {
    req.error = `Пользователь с логином ${user.username} уже зарегистрирован`;
    return next();
  }
  user = await usersStore.createUser(req.body.user);
  req.info = "Пользователь зарегистрирован";
  req.user = user;
  return next();
}
