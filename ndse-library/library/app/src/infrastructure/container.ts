import { Container } from "inversify";
import { AbstractBooksRepository } from "../modules/books/AbstractBooksRepository";
import { BooksService } from "../modules/books/BooksService";
import { AbstractCommentsRepository } from "../modules/comments/AbstractCommentsRepository";
import { CommentsService } from "../modules/comments/CommentsService";
import { PasswordService } from "../modules/password/PasswordService";
import { AbstractUsersRepository } from "../modules/users/AbstractUsersRepository";
import { UsersService } from "../modules/users/UsersService";
import { BcryptPasswordService } from "./BcryptPasswordService";
import { MongoBooksRepository } from "./MongoBooksRepository";
import { MongoCommentsRepository } from "./MongoCommentsRepository";
import { MongoUsersRepository } from "./MongoUsersRepository";

const container = new Container();

container.bind(AbstractBooksRepository).to(MongoBooksRepository);
container.bind(AbstractCommentsRepository).to(MongoCommentsRepository);
container.bind(AbstractUsersRepository).to(MongoUsersRepository);
container.bind(PasswordService).to(BcryptPasswordService);

container.bind(BooksService).toSelf();
container.bind(CommentsService).toSelf();
container.bind(UsersService).toSelf();

export default container;
