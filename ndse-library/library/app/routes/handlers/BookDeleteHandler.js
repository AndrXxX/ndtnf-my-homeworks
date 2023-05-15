const booksStore = require("../../store/BookStore");

module.exports = (req, res, next) => {
  const result = booksStore.delete(req.params.id);
  if (result) {
    return res.redirect('/books');
  }
  next();
};
