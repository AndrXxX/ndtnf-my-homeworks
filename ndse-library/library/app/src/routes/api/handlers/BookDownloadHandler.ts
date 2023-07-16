import { booksStore } from "/store/BooksStore";
import uploadDirAccessor from "/utils/UploadDirAccessor";
import { NextFunction, Request, Response } from "express";
import path from "path";

export default async (req: Request, res: Response, next: NextFunction) => {
  const book = await booksStore.getBook(req.params.id);
  if (!book || !book.fileName) {
    return next();
  }
  const file = path.join(__dirname, "../../../", book.fileName);
  if (!uploadDirAccessor.checkAccess(file)) {
    return next();
  }
  res.download(file, path.basename(file));
};
