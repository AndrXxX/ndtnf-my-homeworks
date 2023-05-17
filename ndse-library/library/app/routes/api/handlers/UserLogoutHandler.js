module.exports = async (req, res) => {
  req.logout(() => {
    res.status(201).json("ok");
  });
};
