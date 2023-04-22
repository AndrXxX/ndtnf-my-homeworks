const booksStore = require("../../../store/BookStore");

module.exports = (req, res, next) => {
  const book = booksStore.get(req.params.id);
  if (book) {
    const params = req.body;
    if (req.file) {
      const { path } = req.file;
      params.fileBook = path;
    }
    book.fillByParams(params);
    res.code = 201;
    return res.json(book);
  }
  next();
};
