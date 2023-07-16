import express from "express";
import expressSession from "express-session";
import passport from "passport";
import { Server } from "socket.io";

import apiRouter from "routes/api";
import indexRouter from "routes/index";
import booksRouter from "routes/books";
import userRouter from "routes/user";

import mongoose from "mongoose";
import authMiddleware from "./middleware/auth";
import error404Middleware from "./middleware/web404";
import config from "config";
import uploadDirAccessor from "./utils/UploadDirAccessor";
import auth from "boot/auth";
import bootSocket from "boot/socket";

const app = express();
auth();

app.use(expressSession({
  secret: config.cookieSecret,
  resave: false,
  saveUninitialized: false,
}))

app.use(passport.initialize())
app.use(passport.session())

app.set("view engine", "ejs");
uploadDirAccessor.createBookUploadDir();

app.use(express.json());
app.use(express.urlencoded());
app.use('/api', apiRouter);
app.use('/user', userRouter);
app.use(authMiddleware);
app.use('/', indexRouter);
app.use('/books', booksRouter);
app.use(error404Middleware);

try {
  mongoose.connect(config.dbUrl).then(() => {
    const server = app.listen(config.port);
    bootSocket(new Server(server));
  });
} catch (e) {
  console.error(e);
}
