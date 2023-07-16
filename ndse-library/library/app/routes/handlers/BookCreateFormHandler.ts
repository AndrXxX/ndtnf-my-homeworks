import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  res.render("books/create", {
    title: "Книги | Добавление",
    book: {},
  });
};
