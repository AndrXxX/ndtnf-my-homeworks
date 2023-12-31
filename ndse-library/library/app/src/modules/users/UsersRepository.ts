import { User } from "./user";

export type UserFilter = {
  [propertyName: string]: string|number|unknown;
  id?: string;
  username?: string;
}

export interface iUsersRepository {
  getUser(filter: UserFilter): Promise<User>;
  createUser(params: User): Promise<User>;
}
