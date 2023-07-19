import { Container } from "inversify";
import { iBooksRepository } from "../modules/books/BooksRepository";
import { BooksService } from "../modules/books/BooksService";
import { iCommentsRepository } from "../modules/comments/CommentsRepository";
import { CommentsService } from "../modules/comments/CommentsService";
import { AbstractCountersRepository } from "../modules/counters/AbstractCountersRepository";
import { CountersService } from "../modules/counters/CountersService";
import { PasswordService } from "../modules/password/PasswordService";
import { AbstractUsersRepository } from "../modules/users/AbstractUsersRepository";
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
container.bind<AbstractCountersRepository>(TYPES.CountersRepository).to(ApiCountersRepository);
container.bind<AbstractUsersRepository>(TYPES.UsersRepository).to(MongoUsersRepository);
container.bind<PasswordService>(TYPES.PasswordService).to(BcryptPasswordService);

container.bind(BooksService).toSelf();
container.bind(CommentsService).toSelf();
container.bind(CountersService).toSelf();
container.bind(UsersService).toSelf();

export default container;
