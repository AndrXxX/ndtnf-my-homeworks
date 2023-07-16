import authMiddleware from "/middleware/apiAuth";
import express from "express";
import passport from "passport";
import userLoginHandler from "./handlers/UserLoginHandler";
import userLogoutHandler from "./handlers/UserLogoutHandler";
import userProfileHandler from "./handlers/UserProfileHandler";
import userSignupHandler from "./handlers/UserSignupHandler";

const router = express.Router();
router.post('/login',
  passport.authenticate('local'),
  userLoginHandler,
);

router.post('/signup',
  userSignupHandler,
);

router.post('/logout',
  userLogoutHandler,
);

router.get('/me',
  authMiddleware,
  userProfileHandler,
);

export default router;
