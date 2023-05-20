module.exports = async (req, res) => {
  res.render('user/profile', {
    title: "Профиль",
    user: req.user,
  });
};
