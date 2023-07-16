import express from "express";
import passport from "passport";
import handlers from "./handlers";
import signupMiddleware from "../../middleware/signup";
import authMiddleware from "../../middleware/apiAuth";

const router = express.Router();
router.post('/login',
  passport.authenticate('local'),
  handlers.user.login,
);

router.post('/signup',
  signupMiddleware,
  handlers.user.signup,
);

router.post('/logout',
  handlers.user.logout,
);

router.get('/me',
  authMiddleware,
  handlers.user.info,
);

export default router;
