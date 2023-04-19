const Book = require("../models/Book");

const store = {
  items: [],
  getAll: function() {
    return this.items.slice();
  },
  add: function(params) {
    const book = new Book();
    book.fillByParams(params)
    this.items.push(book);
    return book;
  },
  get: function(id) {
    return this.items.find((item) => item.id === id);
  },
  delete: function(id) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  },
};

module.exports = store;
