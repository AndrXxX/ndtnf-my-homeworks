import { NextFunction, Request, Response } from "express";
import { booksStore } from "store/BooksStore";
import path from "path";
import uploadDirAccessor from "utils/UploadDirAccessor";

export default async (req: Request, res: Response, next: NextFunction) => {
  const book = await booksStore.getBook(req.params.id);
  if (!book || !book.fileCover) {
    return next();
  }
  const file = path.join(__dirname, "../../../", book.fileCover);
  if (!uploadDirAccessor.checkAccess(file)) {
    return next();
  }
  res.download(file, path.basename(file));
};
