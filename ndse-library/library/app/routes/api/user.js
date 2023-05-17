const express = require('express');
const router = express.Router();
const passport = require( 'passport');
const handlers = require('./handlers');

router.post('/login',
  passport.authenticate('local'),
  handlers.user.login,
);

module.exports = router;
