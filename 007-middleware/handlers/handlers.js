

module.exports = {
  books: {
    fetchAll: require('./books/FetchAllHandler'),
    fetchById: require('./books/FetchByIdHandler'),
    add: require('./books/AddHandler'),
    update: require('./books/UpdateHandler'),
    delete: require('./books/DeleteHandler'),
    download: require('./books/DownloadHandler'),
  }
};
