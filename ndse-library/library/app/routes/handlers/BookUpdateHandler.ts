import { NextFunction, Request, Response } from "express";
import { FilesList } from "intefaces/FilesList";
import { booksStore } from "store/BooksStore";

export default async (req: Request, res: Response, next: NextFunction) => {
  if (!await booksStore.hasBook(req.params.id)) {
    return next();
  }
  const params = req.body;
  const files = req.files as FilesList;
  files.fileName && (params.fileName = files.fileName[0].path);
  files.fileCover && (params.fileCover = files.fileCover[0].path);
  await booksStore.updateBook(req.params.id, params);
  return res.redirect(`/books/${req.params.id}`);
};
