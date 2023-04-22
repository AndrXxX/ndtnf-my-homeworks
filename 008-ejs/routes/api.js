const express = require('express');
const router = express.Router();
const userRouter = require('./api/user');
const booksRouter = require('./api/books');

router.use('/user', userRouter);
router.use('/books', booksRouter);

module.exports = router;
