import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  res.render('errors/404', {
    title: '404 | Not found'
  });
};
