const booksStore = require("../../store/BookStore");
const countersFactory = require('../../utils/CountersAccessor');

module.exports = async (req, res, next) => {
  const counter = countersFactory.getAccessor();
  await counter.incr(req.params.id);
  const book = booksStore.get(req.params.id);
  if (!book) {
    return next();
  }
  res.render("books/view", {
    title: "Книги | Просмотр",
    book,
    count: await counter.get(req.params.id),
  });
};
