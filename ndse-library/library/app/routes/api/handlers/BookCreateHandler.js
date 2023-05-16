const booksStore = require("../../../store/BooksStore");

module.exports = async (req, res) => {
  const params = req.body;
  const files = req.files || {};
  files.fileName && (params.fileName = files.fileName[0].path);
  files.fileCover && (params.fileCover = files.fileCover[0].path);
  const book = await booksStore.create(params);
  res.code = 201;
  res.redirect(`/api/books/${book._id}`);
};
