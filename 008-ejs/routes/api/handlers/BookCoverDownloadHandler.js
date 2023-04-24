const booksStore = require("../../../store/BookStore");
const path = require('path');
const uploadDirAccessor = require('../../../utils/UploadDirAccessor');

module.exports = (req, res, next) => {
  const book = booksStore.get(req.params.id);
  if (!book || !book.fileBook) {
    return next();
  }
  const file = path.join(__dirname, "../../", book.fileCover);
  if (!uploadDirAccessor.checkAccess(file)) {
    return next();
  }
  res.download(file, path.basename(file));
};
