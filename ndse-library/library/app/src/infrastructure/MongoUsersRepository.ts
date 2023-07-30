import { injectable } from "inversify";
import { Document, model } from "mongoose";
import { iPasswordService } from "../modules/password/PasswordService";
import { User } from '../modules/users/user';
import { iUsersRepository, UserFilter } from "../modules/users/UsersRepository";
import { userSchema } from "./mongo.schemas/user.schema";

const UserModel = model<User & Document>("User", userSchema)

@injectable()
export class MongoUsersRepository implements iUsersRepository {
  constructor(private readonly generator: iPasswordService) {}
  async getUser(filter: UserFilter): Promise<User> {
    if (filter.id) {
      return UserModel.findById(filter.id).select('-__v');
    }
    return UserModel.findOne(filter).select('-__v');
  }
  async createUser(params: User) {
    const user = new UserModel(params);
    user.password = this.generator.generate(user.password);
    await user.save();
    return user;
  }
}
