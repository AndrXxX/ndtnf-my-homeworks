const express = require('express');
const router = express.Router();
const error404Middleware = require("../middleware/web404");
const fileMiddleware = require("../middleware/file");
const handlers = require('./handlers');

router.get('/', handlers.books.fetchAll);
router.get('/create', handlers.books.createForm);
router.post('/create',
  fileMiddleware.fields([
    {name: 'fileBook', maxCount: 1},
    {name: 'fileCover', maxCount: 1}
  ]),
  handlers.books.create,
);

router.get('/:id',
  handlers.books.view,
  error404Middleware,
);

router.get('/update/:id',
  fileMiddleware.fields([
    {name: 'fileBook', maxCount: 1},
    {name: 'fileCover', maxCount: 1}
  ]),
  handlers.books.updateForm,
  error404Middleware,
);

router.post('/update/:id',
  bookMulter.single('fileBook'),
  handlers.books.update,
  error404Middleware,
);

router.post('/delete/:id',
  handlers.books.delete,
  error404Middleware,
);

module.exports = router;
