import { User } from "./user";

export type UserFilter = {
  [propertyName: string]: string|number|unknown;
  id?: string;
  username?: string;
}

export abstract class AbstractUsersRepository {
  abstract getUser(filter: UserFilter): Promise<User>;
  abstract createUser(params: User): Promise<User>;
}
