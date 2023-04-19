const express = require('express');
const apiRouter = require('./routes/api');

const app = express();
app.use(express.json());
app.use('/api', apiRouter);

const PORT = process.env.PORT || 3000
app.listen(PORT)
