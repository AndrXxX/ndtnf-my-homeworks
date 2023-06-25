const express = require('express');
const expressSession = require('express-session');
const passport = require('passport');
const { Server } = require("socket.io");

const apiRouter = require('./routes/api');
const indexRouter = require('./routes/index');
const booksRouter = require('./routes/books');
const userRouter = require('./routes/user');

const mongoose = require('mongoose');
const authMiddleware = require("./middleware/auth");
const error404Middleware = require("./middleware/web404");
const { cookieSecret, port, dbUrl } = require('./config');
const uploadDirAccessor = require('./utils/UploadDirAccessor');
const auth = require('./boot/auth');
const bootSocket = require('./boot/socket');

const app = express();
auth();

app.use(expressSession({
  secret: cookieSecret,
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
  mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  const server = app.listen(port);
  bootSocket(new Server(server));
} catch (e) {
  console.error(e);
}
