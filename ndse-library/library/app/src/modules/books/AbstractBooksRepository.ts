import { Book } from "./book";

export interface AbstractBooksRepository {
  getBooks(): Promise<Book[]>;
  hasBook(id: string): Promise<boolean>;
  getBook(id: string): Promise<Book | null>;
  deleteBook(id: string): Promise<boolean>;
  updateBook(id: string, params: Book): Promise<boolean>;
  createBook(params: Book): Promise<Book>;
}
