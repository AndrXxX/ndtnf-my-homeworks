const booksStore = require("../../../store/BookStore");

module.exports = (req, res) => {
  const params = req.body;
  const files = req.files;
  files.fileBook && (params.fileBook = files.fileBook[0].path);
  files.fileCover && (params.fileCover = files.fileCover[0].path);
  const book = booksStore.add(params);
  res.code = 201;
  res.json(book);
};
