import fs from "fs";
import path from "path";
import config from "../config";

const catchOnError = (func: () => void) => {
  try {
    func();
    return true;
  } catch (e) {
    return false;
  }
}

const checkAccess = (path: string) => {
  return catchOnError(() => fs.accessSync(path, fs.constants.R_OK | fs.constants.W_OK));
}

const createBookUploadDir = () => {
  const paths = [
    path.join(__dirname, "../", config.bookUploadPath),
    path.join(__dirname, "../", config.imagesUploadPath),
  ];
  paths.forEach(function (path) {
    if (checkAccess(path)) {
      return true;
    }
    const createDirFunc = () => fs.mkdirSync(path, { recursive: true });
    return catchOnError(createDirFunc);
  });
}

module.exports = {
  checkAccess: checkAccess,
  createBookUploadDir: createBookUploadDir,
}
