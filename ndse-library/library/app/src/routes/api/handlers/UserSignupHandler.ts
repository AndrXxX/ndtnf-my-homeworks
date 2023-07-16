import { usersStore } from "/store/UsersStore";
import { NextFunction, Request, Response } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
  let user = await usersStore.getUser({ username: req.body.user.username });
  if (user) {
    return res.status(201).json({
      error: `Пользователь с логином ${user.username} уже зарегистрирован`,
      info: null,
      success: false,
    });
  }
  user = await usersStore.createUser(req.body.user);
  req.user = user;
  res.status(201).json({
    error: null,
    info: "Пользователь зарегистрирован",
    success: true,
  });
  return next();
}
