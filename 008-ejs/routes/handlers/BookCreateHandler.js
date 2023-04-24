const booksStore = require("../../store/BookStore");

module.exports = (req, res) => {
  const params = req.body;
  if (req.file) {
    const { path } = req.file;
    params.fileBook = path;
  }
  booksStore.add(params);
  res.redirect('/books')
};
