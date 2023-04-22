const booksStore = require("../../store/BookStore");

module.exports = (req, res) => {
  const params = req.body;
  if (req.file) {
    const { path } = req.file;
    params.fileBook = path;
  }
  const book = booksStore.add(params);
  res.code = 201;
  res.json(book);
};
