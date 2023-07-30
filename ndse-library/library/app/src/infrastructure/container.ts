import { Container } from "inversify";
import { iBooksRepository } from "../modules/books/BooksRepository";
import { BooksService } from "../modules/books/BooksService";
import { iCommentsRepository } from "../modules/comments/CommentsRepository";
import { CommentsService } from "../modules/comments/CommentsService";
import { iCountersRepository } from "../modules/counters/CountersRepository";
import { CountersService } from "../modules/counters/CountersService";
import { iPasswordService } from "../modules/password/PasswordService";
import { iUsersRepository } from "../modules/users/UsersRepository";
import { UsersService } from "../modules/users/UsersService";
import { ApiCountersRepository } from "./ApiCountersRepository";
import { BcryptPasswordService } from "./BcryptPasswordService";
import { MongoBooksRepository } from "./MongoBooksRepository";
import { MongoCommentsRepository } from "./MongoCommentsRepository";
import { MongoUsersRepository } from "./MongoUsersRepository";
import TYPES from "./types";

const container = new Container();

container.bind<iBooksRepository>(TYPES.BooksRepository).to(MongoBooksRepository).inSingletonScope();
container.bind<iCommentsRepository>(TYPES.CommentsRepository).to(MongoCommentsRepository);
container.bind<iCountersRepository>(TYPES.CountersRepository).to(ApiCountersRepository);
container.bind<iUsersRepository>(TYPES.UsersRepository).to(MongoUsersRepository);
container.bind<iPasswordService>(TYPES.PasswordService).to(BcryptPasswordService);

container.bind(BooksService).toSelf();
container.bind(CommentsService).toSelf();
container.bind(CountersService).toSelf();
container.bind(UsersService).toSelf();

export default container;
