import { NextFunction, Request, Response } from "express";
import container from "../../../infrastructure/container";
import { BooksService } from "../../../modules/books/BooksService";

export default async (req: Request, res: Response, next: NextFunction) => {
  const booksService = container.get(BooksService);
  const result = await booksService.deleteBook(req.params.id);
  if (result) {
    return res.status(201).json('ok');
  }
  next();
};
