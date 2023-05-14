const booksStore = require("../../../store/BooksStore");
const path = require('path');
const uploadDirAccessor = require('../../../utils/UploadDirAccessor');

module.exports = async (req, res, next) => {
  const book = await booksStore.getById(req.params.id);
  if (!book || !book.fileName) {
    return next();
  }
  const file = path.join(__dirname, "../../../", book.fileName);
  if (!uploadDirAccessor.checkAccess(file)) {
    return next();
  }
  res.download(file, path.basename(file));
};
