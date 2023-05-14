const booksStore = require("../../../store/BooksStore");

module.exports = async (req, res, next) => {
  if (await booksStore.hasBook(req.params.id)) {
    const params = req.body;
    const files = req.files;
    files.fileBook && (params.fileBook = files.fileBook[0].path);
    files.fileCover && (params.fileCover = files.fileCover[0].path);
    await booksStore.update(req.params.id, params);
    res.code = 201;
    return res.json(await booksStore.getById(req.params.id));
  }
  next();
};
