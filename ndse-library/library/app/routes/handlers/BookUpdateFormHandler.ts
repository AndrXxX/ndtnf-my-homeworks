import { NextFunction, Request, Response } from "express";
import { booksStore } from "store/BooksStore";

export default async (req: Request, res: Response, next: NextFunction) => {
  const book = await booksStore.getBook(req.params.id);
  if (!book) {
    return next();
  }
  res.render("books/update", {
    title: "Книги | Редактирование",
    book,
  });
};
