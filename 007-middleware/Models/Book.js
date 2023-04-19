const {v4: uuid} = require("uuid");

class Book {
  constructor(id = uuid()) {
    this.id = id;
    this.title = '';
    this.description = '';
    this.authors = '';
    this.favorite = '';
    this.fileCover = '';
    this.fileName = '';
  }
  fillByParams(params = {}) {
    const skipKeys = ['id'];
    for (const key in this) {
      if (skipKeys.includes(key) || !this.hasOwnProperty(key) || !params[key]) {
        continue;
      }
      this[key] = params[key];
    }
  }
}

module.exports = Book;
