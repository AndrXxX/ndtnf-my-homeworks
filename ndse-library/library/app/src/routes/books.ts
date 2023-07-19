import fileMiddleware from "../middleware/file";
import error404Middleware from "../middleware/web404";
import express from "express";
import bookCoverDownloadHandler from "./api/handlers/BookCoverDownloadHandler";
import bookDownloadHandler from "./api/handlers/BookDownloadHandler";
import bookCreateFormHandler from "./handlers/BookCreateFormHandler";
import bookCreateHandler from "./handlers/BookCreateHandler";
import bookDeleteHandler from "./handlers/BookDeleteHandler";
import booksFetchAllHandler from "./handlers/BooksFetchAllHandler";
import bookUpdateFormHandler from "./handlers/BookUpdateFormHandler";
import bookUpdateHandler from "./handlers/BookUpdateHandler";
import bookViewHandler from "./handlers/BookViewHandler";

const router = express.Router();

router.get('/', booksFetchAllHandler);

router.get('/create', bookCreateFormHandler);

router.post('/create',
  fileMiddleware.fields([
    {name: 'fileName', maxCount: 1},
    {name: 'fileCover', maxCount: 1}
  ]),
  bookCreateHandler,
);

router.get('/:id/download-file',
  bookDownloadHandler,
  error404Middleware,
);

router.get('/:id/download-cover',
  bookCoverDownloadHandler,
  error404Middleware,
);

router.get('/:id/update',
  fileMiddleware.fields([
    {name: 'fileName', maxCount: 1},
    {name: 'fileCover', maxCount: 1}
  ]),
  bookUpdateFormHandler,
  error404Middleware,
);

router.post('/:id/update',
  fileMiddleware.fields([
    {name: 'fileName', maxCount: 1},
    {name: 'fileCover', maxCount: 1}
  ]),
  bookUpdateHandler,
  error404Middleware,
);

router.post('/:id/delete',
  bookDeleteHandler,
  error404Middleware,
);

router.get('/:id',
  bookViewHandler,
  error404Middleware,
);

export default router;
