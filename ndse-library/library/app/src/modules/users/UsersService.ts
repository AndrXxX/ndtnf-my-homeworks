import { injectable } from "inversify";
import { AbstractUsersRepository, UserFilter } from "./AbstractUsersRepository";
import { User } from "./user";

@injectable()
export class UsersService {
  constructor(private readonly repo: AbstractUsersRepository) {
  }

  getUser(filter: UserFilter): Promise<User> {
    return this.repo.getUser(filter);
  }

  createUser(params: User): Promise<User> {
    return this.repo.createUser(params);
  }
}
