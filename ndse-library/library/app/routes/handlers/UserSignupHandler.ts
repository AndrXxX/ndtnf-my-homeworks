import { Request, Response } from "express";
import { usersStore } from "store/UsersStore";

export default async (req: Request, res: Response) => {
  let user = await usersStore.getUser({ username: req.body.user.username });
  if (user) {
    return res.render('user/signup', {
      title: "Регистрация",
      user: {},
      error: `Пользователь с логином ${user.username} уже зарегистрирован`,
      info: null,
    });
  }
  user = await usersStore.createUser(req.body.user);
  return res.render('user/signup', {
    title: "Регистрация",
    user: user,
    error: null,
    info: "Пользователь зарегистрирован",
  });
};
