import { executeQuery } from "../../utils/database.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const ID = req.body.ID;
    //   console.log(ID);

    const checkQuery = `SELECT * FROM CUSTOMER WHERE ID = "${ID}"`;
    const customerExists = await executeQuery(checkQuery);
    console.log(customerExists);
    if (customerExists.length === 0) {
      return res.status(404).send({ msg: "Customer not found!" });
    }
    
    const token = jwt.sign({ custID: ID }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};
