module.exports = async (req, res) => {
  if (req.user) {
    res.redirect('/');
  }
  res.render('user/signup', {
    title: "Регистрация",
    user: {},
    error: false,
    info: false,
  })
};
