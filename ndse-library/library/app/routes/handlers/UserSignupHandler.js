module.exports = async (req, res) => {
  res.render('user/signup', {
    title: "Регистрация",
    user: req.body.user || {},
    error: req.error,
    info: req.info,
  });
};
