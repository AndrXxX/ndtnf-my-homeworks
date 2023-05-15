module.exports = (req, res) => {
  res.render("books/create", {
    title: "Книги | Добавление",
    book: {},
  });
};
