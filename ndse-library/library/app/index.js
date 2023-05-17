const express = require('express');
const expressSession = require('express-session');
const passport = require('passport');

const apiRouter = require('./routes/api');
const indexRouter = require('./routes/index');
const booksRouter = require('./routes/books');
const userRouter = require('./routes/user');

const mongoose = require('mongoose');
const error404Middleware = require("./middleware/web404");
const { cookieSecret, port, dbUrl } = require('./config');
const uploadDirAccessor = require('./utils/UploadDirAccessor');
const auth = require('./boot/auth');

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
app.use('/api', apiRouter);
app.use('/', indexRouter);
app.use(express.urlencoded());
app.use('/books', booksRouter);
app.use('/user', userRouter);
app.use(error404Middleware);

try {
  mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  app.listen(port);
} catch (e) {
  console.error(e);
}
