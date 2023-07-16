import { booksStore } from "/store/BooksStore";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  res.json(await booksStore.getBooks());
};
