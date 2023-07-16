export default {
  books: {
    fetchAll: require('./BooksFetchAllHandler'),
    fetchById: require('./BookFetchByIdHandler'),
    create: require('./BookCreateHandler'),
    update: require('./BookUpdateHandler'),
    delete: require('./BookDeleteHandler'),
    download: require('./BookDownloadHandler'),
    downloadCover: require('./BookCoverDownloadHandler'),
  },
  user: {
    login: require('./UserLoginHandler'),
    signup: require('./UserSignupHandler'),
    logout: require('./UserLogoutHandler'),
    info: require('./UserLogoutHandler'),
  },
};
