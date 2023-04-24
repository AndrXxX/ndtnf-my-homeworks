const booksStore = require("../../store/BookStore");

module.exports = (req, res) => {
  res.render("books/index", {
    title: "Список книг",
    books: booksStore.getAll(),
  });
};
