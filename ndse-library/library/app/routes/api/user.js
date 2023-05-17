const express = require('express');
const router = express.Router();
const passport = require( 'passport');
const handlers = require('./handlers');
const signupMiddleware = require('../../middleware/apiSignup');

router.post('/login',
  passport.authenticate('local'),
  handlers.user.login,
);

router.post('/signup',
  signupMiddleware,
  handlers.user.signup,
);

router.get('/logout',
  handlers.user.logout,
);

module.exports = router;
