import express from "express";
import {
  getAllCustomers,
  getCustomerByID,
} from "../controllers/customer/read.js";
import { addCustomer } from "../controllers/customer/insert.js";
import { deleteCustomer } from "../controllers/customer/delete.js";
import { updateCustomer } from "../controllers/customer/update.js";

import customerValidation from "../utils/validators/customerValidationSchema.js";
import compressionMiddleware from "../utils/compression.js";
const router = express.Router();

router.get("/allCustomers", compressionMiddleware, getAllCustomers);
router.get("/get/:id", compressionMiddleware, getCustomerByID);
router.post("/add", customerValidation, addCustomer);
router.delete("/delete/:id", deleteCustomer);
router.put("/update/:id", updateCustomer);

export default router;
