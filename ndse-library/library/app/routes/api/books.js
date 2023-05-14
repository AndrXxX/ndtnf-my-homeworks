const express = require('express');
const router = express.Router();
const error404Middleware = require("../../middleware/api404");
const fileMiddleware = require('../../middleware/file');
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
  fileMiddleware.fields([
    {name: 'fileName', maxCount: 1},
    {name: 'fileCover', maxCount: 1}
  ]),
  handlers.books.create,
);

router.put('/:id',
  fileMiddleware.fields([
    {name: 'fileName', maxCount: 1},
    {name: 'fileCover', maxCount: 1}
  ]),
  handlers.books.update,
  error404Middleware,
);

router.delete('/:id',
  handlers.books.delete,
  error404Middleware,
);

module.exports = router;
