const express = require('express');
const router = express.Router();
const booksStore = require("../../Store/BookStore");
const error404Middleware = require("../../middleware/error404");
const handlers = require('../../handlers/handlers');

router.get('/', handlers.books.fetchAll);

router.get('/:id',
  handlers.books.fetchById,
  error404Middleware,
);

router.post('', handlers.books.add);

router.put('/:id',
  handlers.books.update,
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
