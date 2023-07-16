import { Request, Response } from 'express'
import { booksStore } from "store/BooksStore";

interface FilesList {
  [fieldName: string]: Express.Multer.File[];
}

export default async (req: Request & Express.Request, res: Response) => {
  const params = req.body;
  const files = req.files as FilesList;
  files.fileName && (params.fileName = files.fileName[0].path);
  files.fileCover && (params.fileCover = files.fileCover[0].path);
  const book = await booksStore.createBook(params);
  res.redirect(`/api/books/${book.id}`);
};
