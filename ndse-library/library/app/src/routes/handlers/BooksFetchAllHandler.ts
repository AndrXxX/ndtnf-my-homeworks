import { booksStore } from "../../store/BooksStore";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  res.render("books/index", {
    title: "Список книг",
    books: await booksStore.getBooks(),
  });
};
