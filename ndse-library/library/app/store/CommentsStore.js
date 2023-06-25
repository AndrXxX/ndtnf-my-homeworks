const CommentModel = require('../models/Comment');

class CommentsStore {
  async getComments(limit, params) {
    return CommentModel.find(params).sort({ 'date': -1, '_id': -1 }).limit(limit).select('-__v');
  }
  async create(params) {
    const comment = new CommentModel(params);
    await comment.save();
    return comment;
  }
}

module.exports = new CommentsStore();
