module.exports = async (req, res) => {
  return res.status(201).json({
    error: req.error,
    info: req.info,
    success: !req.error,
  });
};
