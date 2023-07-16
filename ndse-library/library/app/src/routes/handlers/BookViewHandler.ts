import { User } from "/models/User";
import { booksStore } from "/store/BooksStore";
import countersFactory from "/utils/CountersAccessor";
import { NextFunction, Request, Response } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
  const counter = countersFactory.getAccessor();
  await counter.incr(req.params.id);
  const book = await booksStore.getBook(req.params.id);
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
