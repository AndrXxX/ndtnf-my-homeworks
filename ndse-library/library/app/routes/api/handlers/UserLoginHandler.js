module.exports = async (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(401).json({ error: "Неверное имя пользователя или пароль"});
  }
  return res.status(201).json({ id: user.id, email: user.email });
};
