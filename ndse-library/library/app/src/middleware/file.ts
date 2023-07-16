import { Request } from "express";
import multer from "multer";
import config from "/config";

const MAX_FILE_SIZE = 10*1024*1024;
const allowedTypes = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain',
  'application/fb2',
  'application/vnd.oasis.opendocument.text',
  'image/jpeg',
  'image/png',
];

const storage = multer.diskStorage({
  destination(req, file, cb) {
    if (file.fieldname === "fileName") {
      cb(null, config.bookUploadPath);
    } else {
      cb(null, config.imagesUploadPath);
    }
  },
  filename(req, file, cb) {
    cb(null, `${new Date().toISOString().replace(/:/g, '-')}-${file.originalname}`)
  }
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: (err: Error, passed: boolean) => void) => {
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(null, false);
  }
  if (file.size > MAX_FILE_SIZE) {
    return cb(null, false);
  }
  return cb(null, true);
};

export default multer({
  storage,
  fileFilter
});
