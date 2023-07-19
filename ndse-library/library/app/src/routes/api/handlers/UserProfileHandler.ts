import { Request, Response } from "express";
import { User } from "../../../modules/users/user";

export default async (req: Request, res: Response) => {
  const user = req.user as User;
  return res.status(201).json({ id: user.id, username: user.username, email: user.email });
};
