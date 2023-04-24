module.exports = {
  books: {
    fetchAll: require('./FetchAllBooksHandler'),
    createForm: require('./BookCreateFormHandler'),
    create: require('./CreateBookHandler'),
    // update: require('./UpdateBookHandler'),
    delete: require('./DeleteBookHandler'),
    view: require('./BookViewHandler'),
    updateForm: require('./BookUpdateFormHandler'),
  }
};
