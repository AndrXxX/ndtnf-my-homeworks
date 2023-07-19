import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  req.logout(() => {
    res.redirect('/');
  });
};
