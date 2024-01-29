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
import { login } from "../controllers/book/login.js";
import { verifyToken } from "../utils/auth.js";

const router = express.Router();

router.get("/", verifyToken, (req, res) => {
  res.status(200).json({ message: "Protected route accessed" });
});

router.post("/login", login);
router.get("/allCustomers", compressionMiddleware, getAllCustomers);
router.get("/get/:id", compressionMiddleware, getCustomerByID);
router.post("/add", verifyToken, customerValidation, addCustomer);
router.delete("/delete/:id", deleteCustomer);
router.put("/update/:id", verifyToken, updateCustomer);

export default router;
