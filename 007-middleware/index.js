const express = require('express');
const apiRouter = require('./routes/api');
const error404Middleware = require("./middleware/error404");

const app = express();

app.use(express.json());
app.use('/api', apiRouter);
app.use(error404Middleware);

const PORT = process.env.PORT || 3000
app.listen(PORT)
