const fs = require('fs');
const EventEmitter = require('events');
const path = require('path');

const LOGS_DIR = process.env.LOGS_DIR || '../Logs';
class LogAccessor extends EventEmitter { }

const checkAccess = (file) => {
  try {
    fs.accessSync(file, fs.constants.R_OK | fs.constants.W_OK);
    return true;
  } catch (e) {
    return false;
  }
}

const createFile = (file) => {
  if (checkAccess(file)) {
    return true;
  }
  try {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, "");
    return true;
  } catch (e) {
    return false;
  }
}

const getAccessor = (fileName) => {
  const file = path.join(__dirname, LOGS_DIR, fileName);
  if (!createFile(file)) {
    console.error(`Не удалось получить доступ к файлу ${file}`)
    process.exit(-1);
  }

  const accessor = new LogAccessor();
  accessor.on('write', (data) => {
    fs.appendFile(file, data, err => err && console.err('Не удалось записать в файл', err));
  })
  return accessor;
}

module.exports = {
  getLogger: fileName => getAccessor(fileName),
};
