import { Request, Response } from 'express'
import { booksStore } from "store/BooksStore";

export default async (req: Request, res: Response) => {
  res.render("books/index", {
    title: "Список книг",
    books: await booksStore.getBooks(),
  });
};
