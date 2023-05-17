module.exports = async (req, res) => {
  req.logout()
  return res.status(201).json("ok");
};
