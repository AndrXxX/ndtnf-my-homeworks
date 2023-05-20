module.exports = async (req, res) => {
  const user = req.user;
  return res.status(201).json({ id: user.id, username: user.username, email: user.email });
};
