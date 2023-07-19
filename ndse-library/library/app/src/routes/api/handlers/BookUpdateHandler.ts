import { NextFunction, Request, Response } from "express";
import container from "../../../infrastructure/container";
import { FilesList } from "../../../interfaces/FilesList";
import { BooksService } from "../../../modules/books/BooksService";

export default async (req: Request, res: Response, next: NextFunction) => {
  const booksService = container.get(BooksService);
  if (await booksService.hasBook(req.params.id)) {
    const params = req.body;
    const files = req.files as FilesList;
    files.fileName && (params.fileName = files.fileName[0].path);
    files.fileCover && (params.fileCover = files.fileCover[0].path);
    await booksService.updateBook(req.params.id, params);
    return res.status(201).json(await booksService.getBook(req.params.id));
  }
  next();
};
