const booksStore = require("../../store/BooksStore");

module.exports = async (req, res, next) => {
  const book = await booksStore.getById(req.params.id);
  if (!book) {
    return next();
  }
  res.render("books/update", {
    title: "Книги | Редактирование",
    book,
  });
};
