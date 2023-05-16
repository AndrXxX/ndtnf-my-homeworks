const BookModel = require('../models/Book');

class BooksStore {
  async getAll() {
    try {
      return await BookModel.find().select('-__v');
    } catch (e) {
      console.error(e);
      return [];
    }
  }
  async hasBook(id) {
    return null !== await this.getById(id);
  }
  async getById(id) {
    try {
      return await BookModel.findById(id).select('-__v');
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  async delete(id) {
    try {
      await BookModel.findByIdAndDelete(id);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
  async update(id, params) {
    try {
      await BookModel.findByIdAndUpdate(id, params).select('-__v');
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
  async create(book) {
    const bookModel = new BookModel(book);
    try {
      const result = await bookModel.save();
      console.log(result);
      console.log(bookModel);
    } catch (e) {
      console.error(e);
    }
    return bookModel;
  }
}

module.exports = new BooksStore();
