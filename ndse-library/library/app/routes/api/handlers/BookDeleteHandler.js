const booksStore = require("../../../store/BooksStore");

module.exports = async (req, res, next) => {
  const result = await booksStore.delete(req.params.id);
  if (result) {
    res.code = 201;
    return res.json('ok');
  }
  next();
};
