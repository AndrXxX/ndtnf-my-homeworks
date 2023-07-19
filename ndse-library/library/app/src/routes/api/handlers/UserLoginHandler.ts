import { Request, Response } from "express";
import { User } from "../../../modules/users/user";

export default async (req: Request, res: Response) => {
  const user = req.user as User;
  if (!user) {
    return res.status(401).json({ error: "Неверное имя пользователя или пароль"});
  }
  return res.status(201).json({ id: user.id, email: user.email });
};
