const booksStore = require("../../Store/BookStore");

module.exports = (req, res) => {
  res.json(booksStore.getAll());
};
