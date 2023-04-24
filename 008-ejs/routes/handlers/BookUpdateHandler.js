const booksStore = require("../../store/BookStore");

module.exports = (req, res, next) => {
  const book = booksStore.get(req.params.id);
  if (!book) {
    return next();
  }
  const params = req.body;
  if (req.file) {
    const { path } = req.file;
    params.fileBook = path;
  }
  book.fillByParams(params);
  return res.redirect(`/books/${book.id}`);
};
