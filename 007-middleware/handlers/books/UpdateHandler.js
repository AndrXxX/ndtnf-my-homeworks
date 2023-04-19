const booksStore = require("../../store/BookStore");

module.exports = (req, res, next) => {
  const book = booksStore.get(req.params.id);
  if (book) {
    book.fillByParams(req.body);
    res.code = 201;
    return res.json(book);
  }
  next();
};
