const express = require('express');
const router = express.Router();
const booksStore = require("../../Store/BookStore");
const error404Middleware = require("../../middleware/error404");

router.get('/', (req, res) => {
  res.json(booksStore.getAll());
});

router.get('/:id',
  (req, res, next) => {
    const book = booksStore.get(req.params.id);
    if (book) {
      return res.json(book);
    }
    next();
  },
  error404Middleware,
);

router.post('', (req, res) => {
  const book = booksStore.add(req.body);
  res.code = 201;
  res.json(book);
});

router.put('/:id',
  (req, res, next) => {
    const book = booksStore.get(req.params.id);
    if (book) {
      book.fillByParams(req.body);
      res.code = 201;
      return res.json(book);
    }
    next();
  },
  error404Middleware,
);

router.delete('/:id',
  (req, res, next) => {
    const result = booksStore.delete(req.params.id);
    if (result) {
      res.code = 201;
      return res.json('ok');
    }
    next();
  },
  error404Middleware,
);

module.exports = router;
