const booksStore = require("../../Store/BookStore");

module.exports = (req, res, next) => {
  const result = booksStore.delete(req.params.id);
  if (result) {
    res.code = 201;
    return res.json('ok');
  }
  next();
};
