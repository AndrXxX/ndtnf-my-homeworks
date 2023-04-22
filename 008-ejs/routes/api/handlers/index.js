module.exports = {
  books: {
    fetchAll: require('./FetchAllBooksHandler'),
    fetchById: require('./FetchBookByIdHandler'),
    add: require('./AddBookHandler'),
    update: require('./UpdateBookHandler'),
    delete: require('./DeleteBookHandler'),
    download: require('./DownloadBookHandler'),
  }
};
