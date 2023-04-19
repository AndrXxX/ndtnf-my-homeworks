const fs = require("fs");
const path = require("path");
const {bookUploadPath} = require("../config");

const catchOnError = (func) => {
  try {
    func();
    return true;
  } catch (e) {
    return false;
  }
}

const checkAccess = (file) => {
  return catchOnError(() => fs.accessSync(file, fs.constants.R_OK | fs.constants.W_OK));
}

const createBookUploadDir = () => {
  const absolutePath = path.join(__dirname, "../", bookUploadPath);
  if (checkAccess(absolutePath)) {
    return true;
  }
  const createDirFunc = () => fs.mkdirSync(absolutePath, { recursive: true });
  return catchOnError(createDirFunc);
}

module.exports = {
  checkAccess: checkAccess,
  createBookUploadDir: createBookUploadDir,
}
