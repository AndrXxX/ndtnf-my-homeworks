const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  res.code = 201;
  res.json({ id: 1, mail: "test@mail.ru" });
});

module.exports = router;
