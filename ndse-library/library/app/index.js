const express = require('express');
const apiRouter = require('./routes/api');
const indexRouter = require('./routes/index');
const booksRouter = require('./routes/books');
const mongoose = require('mongoose');
const error404Middleware = require("./middleware/web404");
const { port, dbUrl } = require('./config');
const uploadDirAccessor = require('./utils/UploadDirAccessor');
const auth = require('./boot/auth');

const app = express();
auth();
app.set("view engine", "ejs");
uploadDirAccessor.createBookUploadDir();

app.use(express.json());
app.use('/api', apiRouter);
app.use('/', indexRouter);
app.use(express.urlencoded());
app.use('/books', booksRouter);
app.use(error404Middleware);

try {
  mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  app.listen(port);
} catch (e) {
  console.error(e);
}
