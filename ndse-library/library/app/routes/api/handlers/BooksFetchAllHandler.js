const booksStore = require("../../../store/BooksStore");

module.exports = async (req, res) => {
  res.json(await booksStore.getAll());
};
