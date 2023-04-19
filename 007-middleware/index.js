const express = require('express');
const booksStore = require('./Store/BookStore');
const userRouter = require('./routes/user');

const app = express();
app.use(express.json());

app.use('/api/user/login', userRouter);

app.get('/api/books', (req, res) => {
  res.json(booksStore.getAll());
});

app.get('/api/books/:id', (req, res) => {
  const book = booksStore.get(req.params.id);
  if (book) {
    return res.json(book);
  }
  res.code = 404;
  res.json('404 | Not found');
});

app.post('/api/books', (req, res) => {
  const book = booksStore.add(req.body);
  res.code = 201;
  res.json(book);
});

app.put('/api/books/:id', (req, res) => {
  const book = booksStore.get(req.params.id);
  if (book) {
    book.fillByParams(req.body);
    res.code = 201;
    return res.json(book);
  }
  res.code = 404;
  res.json('404 | Not found');
});

app.delete('/api/books/:id', (req, res) => {
  const result = booksStore.delete(req.params.id);
  if (result) {
    res.code = 201;
    return res.json('ok');
  }
  res.code = 404;
  res.json('404 | Not found');
})

const PORT = process.env.PORT || 3000
app.listen(PORT)
