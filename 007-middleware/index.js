const express = require('express');
const apiRouter = require('./routes/api');
const error404Middleware = require("./middleware/error404");
const { port } = require('./config');
const uploadHelper = require('./utils/UploadHelper');

const app = express();
uploadHelper.createBookUploadDir();

app.use(express.json());
app.use('/api', apiRouter);
app.use(error404Middleware);

app.listen(port);
