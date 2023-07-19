import { NextFunction, Request, Response } from "express";
import container from "../../infrastructure/container";
import { BooksService } from "../../modules/books/BooksService";
import { CountersService } from "../../modules/counters/CountersService";
import { User } from "../../modules/users/user";

export default async (req: Request, res: Response, next: NextFunction) => {
  const booksService = container.get(BooksService);
  const countersService = container.get(CountersService);
  await countersService.incr(req.params.id);
  const book = await booksService.getBook(req.params.id);
  if (!book) {
    return next();
  }
  res.render("books/view", {
    title: "Книги | Просмотр",
    book,
    count: await countersService.get(req.params.id),
    username: (req.user as User).username,
  });
};
