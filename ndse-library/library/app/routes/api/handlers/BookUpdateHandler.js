const booksStore = require("../../../store/BookStore");

module.exports = (req, res, next) => {
  const book = booksStore.get(req.params.id);
  if (book) {
    const params = req.body;
    const files = req.files;
    files.fileBook && (params.fileBook = files.fileBook[0].path);
    files.fileCover && (params.fileCover = files.fileCover[0].path);
    book.fillByParams(params);
    res.code = 201;
    return res.json(book);
  }
  next();
};
