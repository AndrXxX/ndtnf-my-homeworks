import { NextFunction, Request, Response } from "express";
import container from "../../../infrastructure/container";
import { BooksService } from "../../../modules/books/BooksService";

export default async (req: Request, res: Response, next: NextFunction) => {
  const booksService = container.get(BooksService);
  const book = await booksService.getBook(req.params.id);
  if (book) {
    return res.json(book);
  }
  next();
};
