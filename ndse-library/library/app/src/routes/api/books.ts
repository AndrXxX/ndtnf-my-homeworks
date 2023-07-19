import error404Middleware from "../../middleware/api404";
import fileMiddleware from "../../middleware/file";
import express from "express";
import bookCreateHandler from "./handlers/BookCreateHandler";
import bookDeleteHandler from "./handlers/BookDeleteHandler";
import bookDownloadHandler from "./handlers/BookDownloadHandler";
import bookFetchByIdHandler from "./handlers/BookFetchByIdHandler";
import booksFetchAllHandler from "./handlers/BooksFetchAllHandler";
import bookUpdateHandler from "./handlers/BookUpdateHandler";

const router = express.Router();
router.get('/', booksFetchAllHandler);

router.get('/:id/download',
  bookDownloadHandler,
  error404Middleware,
);

router.get('/:id',
  bookFetchByIdHandler,
  error404Middleware,
);

router.post('/',
  fileMiddleware.fields([
    {name: 'fileName', maxCount: 1},
    {name: 'fileCover', maxCount: 1}
  ]),
  bookCreateHandler,
);

router.put('/:id',
  fileMiddleware.fields([
    {name: 'fileName', maxCount: 1},
    {name: 'fileCover', maxCount: 1}
  ]),
  bookUpdateHandler,
  error404Middleware,
);

router.delete('/:id',
  bookDeleteHandler,
  error404Middleware,
);

export default router;
