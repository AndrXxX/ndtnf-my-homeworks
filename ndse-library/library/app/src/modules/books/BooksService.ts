import { inject, injectable } from "inversify";
import TYPES from "../../infrastructure/types";
import { Book } from "./book";
import { iBooksRepository } from "./BooksRepository";

@injectable()
export class BooksService {
  @inject(TYPES.BooksRepository)
  private readonly repo: iBooksRepository

  getBooks(): Promise<Book[]> {
    return this.repo.getBooks();
  }
  hasBook(id: string): Promise<boolean> {
    return this.repo.hasBook(id);
  }
  getBook(id: string): Promise<Book | null> {
    return this.repo.getBook(id);
  }
  deleteBook(id: string): Promise<boolean> {
    return this.repo.deleteBook(id);
  }
  updateBook(id: string, params: Book): Promise<boolean> {
    return this.repo.updateBook(id, params);
  }
  createBook(params: Book): Promise<Book> {
    return this.repo.createBook(params);
  }
}
