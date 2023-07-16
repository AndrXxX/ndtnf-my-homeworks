import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  if (req.user) {
    res.redirect('/');
  }
  res.render('user/signup', {
    title: "Регистрация",
    user: {},
    error: false,
    info: false,
  })
};
