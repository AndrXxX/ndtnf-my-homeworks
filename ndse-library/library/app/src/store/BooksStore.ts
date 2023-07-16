import { BookModel, Book } from "/models/Book";

export class BooksStore {
  async createBook(book: Book): Promise<Book> {
    const bookModel = new BookModel(book);
    try {
      await bookModel.save();
    } catch (e) {
      console.error(e);
    }
    return bookModel;
  }
  async getBook(id: string): Promise<Book | null> {
    try {
      return await BookModel.findById(id).select('-__v');
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  async getBooks(): Promise<Book[]> {
    try {
      return await BookModel.find().select('-__v');
    } catch (e) {
      console.error(e);
      return [];
    }
  }
  async updateBook(id: string, params: Book): Promise<boolean> {
    try {
      await BookModel.findByIdAndUpdate(id, params).select('-__v');
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
  async deleteBook(id: string): Promise<boolean> {
    try {
      await BookModel.findByIdAndDelete(id);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
  async hasBook(id: string): Promise<boolean> {
    return null !== await this.getBook(id);
  }
}

export const booksStore = new BooksStore();
