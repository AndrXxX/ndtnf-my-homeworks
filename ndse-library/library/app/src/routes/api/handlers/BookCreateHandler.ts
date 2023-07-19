import { Request, Response } from "express";
import container from "../../../infrastructure/container";
import { FilesList } from "../../../interfaces/FilesList";
import { BooksService } from "../../../modules/books/BooksService";

export default async (req: Request, res: Response) => {
  const booksService = container.get(BooksService);
  const params = req.body;
  const files = req.files as FilesList;
  files.fileName && (params.fileName = files.fileName[0].path);
  files.fileCover && (params.fileCover = files.fileCover[0].path);
  const book = await booksService.createBook(params);
  res.redirect(`/api/books/${book.id}`);
};
