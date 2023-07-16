export default {
  books: {
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
