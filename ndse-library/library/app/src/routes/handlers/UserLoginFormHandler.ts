import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  res.render('user/login', {
    title: "Авторизация",
    user: {},
    error: false,
  });
};
