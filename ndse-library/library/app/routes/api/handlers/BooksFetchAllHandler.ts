import { Request, Response } from "express";
import { booksStore } from "store/BooksStore";

export default async (req: Request, res: Response) => {
  res.json(await booksStore.getBooks());
};
