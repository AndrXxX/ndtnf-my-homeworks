import { Container } from "inversify";
import { BcryptPasswordService } from "./BcryptPasswordService";
import { PasswordService } from "../modules/password/PasswordService";
import { BooksService } from "../modules/books/BooksService";
import { AbstractBooksRepository } from "../modules/books/AbstractBooksRepository";
import { MongoBooksRepository } from "./MongoBooksRepository";

const container = new Container();

container.bind(AbstractBooksRepository).to(MongoBooksRepository);
container.bind(PasswordService).to(BcryptPasswordService);

container.bind(BooksService).toSelf();

export default container;
