const UserModel = require('../models/User');
const generator = require('../utils/HashGenerator');

class UserStore {
  async getUser(filter) {
    if (filter.id) {
      return UserModel.findById(filter.id).select('-__v');
    }
    return UserModel.findOne(filter).select('-__v');
  }
  async createUser(params) {
    const user = new UserModel(params);
    user.password = generator.generate(user.password);
    await user.save();
    return user;
  }
}

module.exports = new UserStore();
