const express = require('express');
const router = express.Router();
const error404Middleware = require("../middleware/web404");
const bookMulter = require('../middleware/bookMulter');
const handlers = require('./handlers');

router.get('/', handlers.books.fetchAll);
router.get('/create', handlers.books.createForm);
router.post('/create',
  bookMulter.single('fileBook'),
  handlers.books.create,
);

router.get('/:id',
  handlers.books.view,
  error404Middleware,
);

router.get('/update/:id',
  bookMulter.single('fileBook'),
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
