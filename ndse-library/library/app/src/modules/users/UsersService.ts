import { inject, injectable } from "inversify";
import TYPES from "../../infrastructure/types";
import { User } from "./user";
import { iUsersRepository, UserFilter } from "./UsersRepository";

@injectable()
export class UsersService {
  @inject(TYPES.UsersRepository)
  private readonly repo: iUsersRepository

  getUser(filter: UserFilter): Promise<User> {
    return this.repo.getUser(filter);
  }

  createUser(params: User): Promise<User> {
    return this.repo.createUser(params);
  }
}
