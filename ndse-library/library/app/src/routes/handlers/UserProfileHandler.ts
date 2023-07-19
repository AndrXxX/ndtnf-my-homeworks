import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  res.render('user/profile', {
    title: "Профиль",
    user: req.user,
  });
};
