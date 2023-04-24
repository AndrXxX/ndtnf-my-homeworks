module.exports = {
  books: {
    fetchAll: require('./FetchAllBooksHandler'),
    createForm: require('./BookCreateFormHandler'),
    create: require('./CreateBookHandler'),
    delete: require('./DeleteBookHandler'),
    view: require('./BookViewHandler'),
    update: require('./UpdateBookHandler'),
    updateForm: require('./BookUpdateFormHandler'),
  }
};
