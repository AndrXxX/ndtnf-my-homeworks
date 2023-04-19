const express = require('express');
const router = express.Router();
const booksStore = require("../../Store/BookStore");

router.get('/', (req, res) => {
  res.json(booksStore.getAll());
});

router.get('/:id', (req, res) => {
  const book = booksStore.get(req.params.id);
  if (book) {
    return res.json(book);
  }
  res.code = 404;
  res.json('404 | Not found');
});

router.post('', (req, res) => {
  const book = booksStore.add(req.body);
  res.code = 201;
  res.json(book);
});

router.put('/:id', (req, res) => {
  const book = booksStore.get(req.params.id);
  if (book) {
    book.fillByParams(req.body);
    res.code = 201;
    return res.json(book);
  }
  res.code = 404;
  res.json('404 | Not found');
});

router.delete('/:id', (req, res) => {
  const result = booksStore.delete(req.params.id);
  if (result) {
    res.code = 201;
    return res.json('ok');
  }
  res.code = 404;
  res.json('404 | Not found');
})

module.exports = router;
