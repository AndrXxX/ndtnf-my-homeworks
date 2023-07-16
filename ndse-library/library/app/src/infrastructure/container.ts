import { Container } from "inversify";
import { BooksService } from "../modules/books/BooksService";
import { AbstractBooksRepository } from "../modules/books/AbstractBooksRepository";
import { MongoBooksRepository } from "./MongoBooksRepository";

const container = new Container();

container.bind(AbstractBooksRepository).to(MongoBooksRepository);
container.bind(BooksService).toSelf();

export default container;
