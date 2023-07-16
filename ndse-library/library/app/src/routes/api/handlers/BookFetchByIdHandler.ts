import { booksStore } from "../../../store/BooksStore";
import { NextFunction, Request, Response } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
  const book = await booksStore.getBook(req.params.id);
  if (book) {
    return res.json(book);
  }
  next();
};
