import { User, UserModel } from "models/User";
import generator from "utils/HashGenerator";

class UserStore {
  async getUser(filter: User) {
    if (filter.id) {
      return UserModel.findById(filter.id).select('-__v');
    }
    return UserModel.findOne(filter).select('-__v');
  }
  async createUser(params: User) {
    const user = new UserModel(params);
    user.password = generator.generate(user.password);
    await user.save();
    return user;
  }
}

export const userStore = new UserStore();
