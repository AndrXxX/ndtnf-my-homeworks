const booksStore = require("../../store/BooksStore");

module.exports = async (req, res) => {
  res.render("books/index", {
    title: "Список книг",
    books: await booksStore.getAll(),
  });
};
