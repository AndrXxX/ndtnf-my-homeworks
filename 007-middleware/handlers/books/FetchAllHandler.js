const booksStore = require("../../store/BookStore");

module.exports = (req, res) => {
  res.json(booksStore.getAll());
};
