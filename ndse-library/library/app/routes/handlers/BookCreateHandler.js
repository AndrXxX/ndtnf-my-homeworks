const booksStore = require("../../store/BooksStore");

module.exports = async (req, res) => {
  const params = req.body;
  const files = req.files || {};
  files.fileBook && (params.fileBook = files.fileBook[0].path);
  files.fileCover && (params.fileCover = files.fileCover[0].path);
  const book = await booksStore.create(params);
  res.redirect(`/books/${book._id}`);
};
