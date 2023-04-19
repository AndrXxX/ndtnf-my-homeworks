const express = require('express');
const router = express.Router();
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
  handlers.books.delete,
  error404Middleware,
);

module.exports = router;
