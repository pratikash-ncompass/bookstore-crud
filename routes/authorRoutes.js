import express from "express";
import { allAuthors, getAuthorByID } from "../controllers/author/read.js";
import { addAuthor } from "../controllers/author/insert.js";
import { updateAuthor } from "../controllers/author/update.js";
import { deleteAuthor } from "../controllers/author/delete.js";

import validateAuthor from "../utils/validators/authorValidationSchema.js";
import compressionMiddleware from "../utils/compression.js";
const router = express.Router();

router.get("/all", compressionMiddleware, allAuthors);
router.get("/getAuthor/:id", compressionMiddleware, getAuthorByID);
router.post("/addAuthor", validateAuthor, addAuthor);
router.put("/update/:id", updateAuthor);
router.delete("/delete/:id", deleteAuthor);

export default router;
