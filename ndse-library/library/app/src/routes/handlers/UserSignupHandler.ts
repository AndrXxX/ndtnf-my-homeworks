import { Request, Response } from "express";
import container from "../../infrastructure/container";
import { UsersService } from "../../modules/users/UsersService";

export default async (req: Request, res: Response) => {
  const usersService = container.get(UsersService);
  let user = await usersService.getUser({ username: req.body.user.username });
  if (user) {
    return res.render('user/signup', {
      title: "Регистрация",
      user: {},
      error: `Пользователь с логином ${user.username} уже зарегистрирован`,
      info: null,
    });
  }
  user = await usersService.createUser(req.body.user);
  return res.render('user/signup', {
    title: "Регистрация",
    user: user,
    error: null,
    info: "Пользователь зарегистрирован",
  });
};
