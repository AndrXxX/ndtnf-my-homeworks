import error404Middleware from "../middleware/api404";
import authMiddleware from "../middleware/apiAuth";
import express from "express";
import booksRouter from "./api/books";
import userRouter from "./api/user";

const router = express.Router();
router.use('/user', userRouter);
router.use(authMiddleware);
router.use('/books', booksRouter);
router.use(error404Middleware);

export default router;
