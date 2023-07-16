import { User } from "/models/User";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  const user = req.user as User;
  return res.status(201).json({ id: user.id, username: user.username, email: user.email });
};
