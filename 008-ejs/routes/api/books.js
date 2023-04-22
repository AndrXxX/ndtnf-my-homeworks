const express = require('express');
const router = express.Router();
const error404Middleware = require("../../middleware/api404");
const bookMulter = require('../../middleware/bookMulter');
const handlers = require('./handlers');

router.get('/', handlers.books.fetchAll);

router.get('/:id/download',
  handlers.books.download,
  error404Middleware,
);

router.get('/:id',
  handlers.books.fetchById,
  error404Middleware,
);

router.post('/',
  bookMulter.single('fileBook'),
  handlers.books.add,
);

router.put('/:id',
  bookMulter.single('fileBook'),
  handlers.books.update,
  error404Middleware,
);

router.delete('/:id',
  handlers.books.delete,
  error404Middleware,
);

module.exports = router;
