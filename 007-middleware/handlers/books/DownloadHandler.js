const booksStore = require("../../store/BookStore");
const path = require('path');
const mime = require('mime');
const fs = require('fs');
const uploadDirAccessor = require('../../utils/UploadDirAccessor');

module.exports = (req, res, next) => {
  const book = booksStore.get(req.params.id);
  if (!book || !book.fileBook) {
    return next();
  }
  const file = path.join(__dirname, "../../", book.fileBook);
  if (!uploadDirAccessor.checkAccess(file)) {
    return next();
  }

  res.setHeader('Content-disposition', 'attachment; filename=' + path.basename(file));
  res.setHeader('Content-type', mime.getType(file));
  const filestream = fs.createReadStream(file);
  filestream.pipe(res);
};
