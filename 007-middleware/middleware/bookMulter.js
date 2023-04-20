const multer = require('multer');
const { bookUploadPath } = require('../config');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, bookUploadPath);
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

module.exports = multer({storage});
