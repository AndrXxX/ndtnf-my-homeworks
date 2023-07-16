import { FilesList } from "/intefaces/FilesList";
import { booksStore } from "/store/BooksStore";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  const params = req.body;
  const files = req.files as FilesList;
  files.fileName && (params.fileName = files.fileName[0].path);
  files.fileCover && (params.fileCover = files.fileCover[0].path);
  const book = await booksStore.createBook(params);
  res.redirect(`/api/books/${book.id}`);
};
