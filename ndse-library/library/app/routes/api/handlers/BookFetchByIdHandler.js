const booksStore = require("../../../store/BooksStore");

module.exports = async (req, res, next) => {
  const book = await booksStore.getById(req.params.id);
  if (book) {
    return res.json(book);
  }
  next();
};
