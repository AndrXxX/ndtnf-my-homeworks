module.exports = async (req, res) => {
  res.render('user/login', {
    title: "Авторизация",
    user: {},
    error: false,
  });
};
