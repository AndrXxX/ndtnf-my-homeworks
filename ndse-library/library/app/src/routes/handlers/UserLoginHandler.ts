import { User } from "../../models/User";
import { NextFunction, Request, Response } from "express";
import passport from "passport";

export default async (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('local', function (err: unknown, user: User) {
    if (err || !user) {
      return res.render('user/login', {
        title: "Авторизация",
        user: req.body,
        error: "Неверное имя пользователя или пароль",
      });
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.redirect('/');
    });
  })(req, res, next);
};
