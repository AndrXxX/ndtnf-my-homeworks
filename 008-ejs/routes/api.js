const express = require('express');
const router = express.Router();
const userRouter = require('./api/user');
const booksRouter = require('./api/books');
const error404Middleware = require("../middleware/api404");

router.use('/user', userRouter);
router.use('/books', booksRouter);
router.use(error404Middleware);

module.exports = router;
