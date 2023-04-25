const booksStore = require("../../store/BookStore");

module.exports = (req, res, next) => {
  const book = booksStore.get(req.params.id);
  if (!book) {
    return next();
  }
  res.render("books/view", {
    title: "Книги | Просмотр",
    book,
  });
};
