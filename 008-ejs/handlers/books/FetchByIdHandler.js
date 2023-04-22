const booksStore = require("../../store/BookStore");

module.exports = (req, res, next) => {
  const book = booksStore.get(req.params.id);
  if (book) {
    return res.json(book);
  }
  next();
};
