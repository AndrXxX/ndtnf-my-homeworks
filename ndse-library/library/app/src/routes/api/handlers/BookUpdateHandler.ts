import { FilesList } from "../../../interfaces/FilesList";
import { booksStore } from "../../../store/BooksStore";
import { NextFunction, Request, Response } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
  if (await booksStore.hasBook(req.params.id)) {
    const params = req.body;
    const files = req.files as FilesList;
    files.fileName && (params.fileName = files.fileName[0].path);
    files.fileCover && (params.fileCover = files.fileCover[0].path);
    await booksStore.updateBook(req.params.id, params);
    return res.status(201).json(await booksStore.getBook(req.params.id));
  }
  next();
};
