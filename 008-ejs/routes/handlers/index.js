module.exports = {
  books: {
    fetchAll: require('./FetchAllBooksHandler'),
    createForm: require('./BookCreateFormHandler'),
    create: require('./CreateBookHandler'),
    // fetchById: require('./FetchBookByIdHandler'),
    // update: require('./UpdateBookHandler'),
    // delete: require('./DeleteBookHandler'),
    // download: require('./DownloadBookHandler'),
  }
};
