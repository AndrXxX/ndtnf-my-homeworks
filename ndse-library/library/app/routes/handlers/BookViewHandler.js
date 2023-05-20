const booksStore = require("../../store/BooksStore");
const countersFactory = require('../../utils/CountersAccessor');

module.exports = async (req, res, next) => {
  const counter = countersFactory.getAccessor();
  await counter.incr(req.params.id);
  const book = await booksStore.getById(req.params.id);
  if (!book) {
    return next();
  }
  res.render("books/view", {
    title: "Книги | Просмотр",
    book,
    count: await counter.get(req.params.id),
    username: req.user.username,
  });
};
