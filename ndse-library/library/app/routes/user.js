const express = require('express');
const handlers = require('./handlers');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

router.get('/login',
  handlers.user.loginForm,
);

router.post('/login',
  handlers.user.login,
);

router.get('/signup',
  handlers.user.signupForm,
);

router.post('/signup',
  handlers.user.signup,
);

router.get('/logout',
  handlers.user.logout,
);

router.get('/me',
  authMiddleware,
  handlers.user.info,
);

module.exports = router;
