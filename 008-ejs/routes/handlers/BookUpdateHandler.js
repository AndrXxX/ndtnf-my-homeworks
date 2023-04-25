const booksStore = require("../../store/BookStore");

module.exports = (req, res, next) => {
  const book = booksStore.get(req.params.id);
  if (!book) {
    return next();
  }
  const params = req.body;
  const files = req.files;
  files.fileBook && (params.fileBook = files.fileBook[0].path);
  files.fileCover && (params.fileCover = files.fileCover[0].path);
  book.fillByParams(params);
  return res.redirect(`/books/${book.id}`);
};
