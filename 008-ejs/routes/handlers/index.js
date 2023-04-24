module.exports = {
  books: {
    fetchAll: require('./BooksFetchAllHandler'),
    createForm: require('./BookCreateFormHandler'),
    create: require('./BookCreateHandler'),
    delete: require('./BookDeleteHandler'),
    view: require('./BookViewHandler'),
    update: require('./BookUpdateHandler'),
    updateForm: require('./BookUpdateFormHandler'),
  }
};
