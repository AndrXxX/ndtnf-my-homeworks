const express = require('express');
const router = express.Router();
const handlers = require('./handlers');

router.get('/login',
  handlers.user.loginForm,
);

router.post('/login',
  handlers.user.login,
);

module.exports = router;
