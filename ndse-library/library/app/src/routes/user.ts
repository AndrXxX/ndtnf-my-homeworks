import authMiddleware from "/middleware/apiAuth";
import express from "express";
import userLoginFormHandler from "./handlers/UserLoginFormHandler";
import userLoginHandler from "./handlers/UserLoginHandler";
import userLogoutHandler from "./handlers/UserLogoutHandler";
import userProfileHandler from "./handlers/UserProfileHandler";
import userSignupFormHandler from "./handlers/UserSignupFormHandler";
import userSignupHandler from "./handlers/UserSignupHandler";

const router = express.Router();

router.get('/login',
  userLoginFormHandler,
);

router.post('/login',
  userLoginHandler,
);

router.get('/signup',
  userSignupFormHandler,
);

router.post('/signup',
  userSignupHandler,
);

router.get('/logout',
  userLogoutHandler,
);

router.get('/me',
  authMiddleware,
  userProfileHandler,
);

export default router;
