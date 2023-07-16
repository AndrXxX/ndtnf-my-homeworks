import { User, UserModel } from "/models/User";
import generator from "/utils/HashGenerator";

interface iUserFilter {
  [propertyName: string]: string | number
}

class UsersStore {
  async getUser(filter: iUserFilter) {
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

export const usersStore = new UsersStore();