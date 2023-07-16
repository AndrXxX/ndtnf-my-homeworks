import { NextFunction, Request, Response } from "express";
import container from "../../../infrastructure/container";
import { UsersService } from "../../../modules/users/UsersService";

export default async (req: Request, res: Response, next: NextFunction) => {
  const usersService = container.get(UsersService);
  let user = await usersService.getUser({ username: req.body.user.username });
  if (user) {
    return res.status(201).json({
      error: `Пользователь с логином ${user.username} уже зарегистрирован`,
      info: null,
      success: false,
    });
  }
  user = await usersService.createUser(req.body.user);
  req.user = user;
  res.status(201).json({
    error: null,
    info: "Пользователь зарегистрирован",
    success: true,
  });
  return next();
}
