import { Request, Response } from "express";
import container from "../../infrastructure/container";
import { BooksService } from "../../modules/books/BooksService";

export default async (req: Request, res: Response) => {
  const booksService = container.get(BooksService);
  res.render("books/index", {
    title: "Список книг",
    books: await booksService.getBooks(),
  });
};
