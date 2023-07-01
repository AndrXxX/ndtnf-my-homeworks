import { Request, Response } from "express";

export default (req: Request, res: Response, next: () => void) => {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    return res.redirect('/api/user/login');
  }
  next();
};
