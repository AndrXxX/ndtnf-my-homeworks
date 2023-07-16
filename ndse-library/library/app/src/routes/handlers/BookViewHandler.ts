import { NextFunction, Request, Response } from "express";
import container from "../../infrastructure/container";
import { User } from "../../models/User";
import { BooksService } from "../../modules/books/BooksService";
import countersFactory from "../../utils/CountersAccessor";

export default async (req: Request, res: Response, next: NextFunction) => {
  const booksService = container.get(BooksService);
  const counter = countersFactory.getAccessor();
  await counter.incr(req.params.id);
  const book = await booksService.getBook(req.params.id);
  if (!book) {
    return next();
  }
  res.render("books/view", {
    title: "Книги | Просмотр",
    book,
    count: await counter.get(req.params.id),
    username: (req.user as User).username,
  });
};
