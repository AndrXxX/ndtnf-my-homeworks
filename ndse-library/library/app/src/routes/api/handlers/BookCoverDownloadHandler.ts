import { NextFunction, Request, Response } from "express";
import path from "path";
import container from "../../../infrastructure/container";
import { BooksService } from "../../../modules/books/BooksService";
import uploadDirAccessor from "../../../utils/UploadDirAccessor";

export default async (req: Request, res: Response, next: NextFunction) => {
  const booksService = container.get(BooksService);
  const book = await booksService.getBook(req.params.id);
  if (!book || !book.fileCover) {
    return next();
  }
  const file = path.join(__dirname, "../../../../", book.fileCover);
  if (!uploadDirAccessor.checkAccess(file)) {
    return next();
  }
  res.download(file, path.basename(file));
};
