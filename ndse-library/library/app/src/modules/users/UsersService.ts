import { injectable } from "inversify";
import { iUsersRepository, UserFilter } from "./UsersRepository";
import { User } from "./user";

@injectable()
export class UsersService {
  constructor(private readonly repo: iUsersRepository) {
  }

  getUser(filter: UserFilter): Promise<User> {
    return this.repo.getUser(filter);
  }

  createUser(params: User): Promise<User> {
    return this.repo.createUser(params);
  }
}
