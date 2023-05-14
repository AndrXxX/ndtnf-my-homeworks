const booksStore = require("../../store/BooksStore");

module.exports = async (req, res, next) => {
  if (!await booksStore.hasBook(req.params.id)) {
    return next();
  }
  const params = req.body;
  const files = req.files;
  files.fileBook && (params.fileBook = files.fileBook[0].path);
  files.fileCover && (params.fileCover = files.fileCover[0].path);
  await booksStore.update(req.params.id, params);
  return res.redirect(`/books/${req.params.id}`);
};
