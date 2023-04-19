const booksStore = require("../../Store/BookStore");

module.exports = (req, res) => {
  const book = booksStore.add(req.body);
  res.code = 201;
  res.json(book);
};
