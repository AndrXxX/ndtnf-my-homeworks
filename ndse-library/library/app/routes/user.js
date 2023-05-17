const express = require('express');
const handlers = require('./handlers');
const router = express.Router();
const signupMiddleware = require('../middleware/signup');

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
  signupMiddleware,
  handlers.user.signup,
);

module.exports = router;
