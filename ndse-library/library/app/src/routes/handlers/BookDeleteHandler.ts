import { NextFunction, Request, Response } from 'express'
import { booksStore } from "store/BooksStore";

export default async (req: Request, res: Response, next: NextFunction) => {
  const result = await booksStore.deleteBook(req.params.id);
  if (result) {
    return res.redirect('/books');
  }
  next();
};
