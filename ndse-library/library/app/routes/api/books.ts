import express from "express";
import error404Middleware from "middleware/api404";
import fileMiddleware from "../../middleware/file";
import handlers from "./handlers";

const router = express.Router();
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

export default router;
