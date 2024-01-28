import express from "express";
import { getAllBooks, getBookByID } from "../controllers/book/read.js";
import { insertNew } from "../controllers/book/insert.js";
import { updateBook } from "../controllers/book/update.js";
import { deleteBook } from "../controllers/book/delete.js";

import validateBook from "../utils/validators/bookValidationSchema.js";
import compressionMiddleware from "../utils/compression.js";

const router = express.Router();

router.get("/readAll", compressionMiddleware, getAllBooks);
router.get("/read/:id", compressionMiddleware, getBookByID);
router.post("/insert", validateBook, insertNew);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

export default router;
