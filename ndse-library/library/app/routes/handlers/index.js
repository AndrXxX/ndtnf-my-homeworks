const apiHandlers = require('../api/handlers');

module.exports = {
  books: {
    fetchAll: require('./BooksFetchAllHandler'),
    createForm: require('./BookCreateFormHandler'),
    create: require('./BookCreateHandler'),
    delete: require('./BookDeleteHandler'),
    view: require('./BookViewHandler'),
    update: require('./BookUpdateHandler'),
    updateForm: require('./BookUpdateFormHandler'),
    download: apiHandlers.books.download,
    downloadCover: apiHandlers.books.downloadCover,
  },
  user: {
    login: require('./UserLoginHandler'),
    loginForm: require('./UserLoginFormHandler'),
    signupForm: require('./UserSignupFormHandler'),
    signup: require('./UserSignupHandler'),
    logout: require('./UserLogoutHandler'),
    info: require('./UserProfileHandler'),
  },
};
