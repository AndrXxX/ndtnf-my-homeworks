const express = require('express');
const apiRouter = require('./routes/api');
const indexRouter = require('./routes/index');
// const booksRouter = require('./routes/books');
const error404Middleware = require("./middleware/error404");
const { port } = require('./config');
const uploadDirAccessor = require('./utils/UploadDirAccessor');

const app = express();
app.set("view engine", "ejs");
uploadDirAccessor.createBookUploadDir();

app.use(express.json());
app.use('/api', apiRouter);
app.use('/', indexRouter);
// app.use('/books', booksRouter);
app.use(error404Middleware);

app.listen(port);
