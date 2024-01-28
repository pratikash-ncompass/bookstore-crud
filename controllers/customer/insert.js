import { executeQuery } from "../../utils/database.js";

export const addCustomer = async (req, res) => {
  try {
    const startTime = new Date().getMilliseconds();

    const { ID, NAME, ADDRESS } = req.body;

    const checkQuery = `SELECT * FROM CUSTOMER WHERE ID = "${ID}"`;
    const customerExists = await executeQuery(checkQuery);
    if (customerExists.length !== 0) {
      return res.status(403).json({ message: "customer already exists." });
    }

    const query = `INSERT INTO CUSTOMER (ID, NAME, ADDRESS) VALUES ("${ID}", "${NAME}", "${ADDRESS}")`;
    await executeQuery(query);

    const endTime = new Date().getMilliseconds();
    const totalTime = endTime - startTime;

    res.send({
      status: "true",
      message: "New Customer added successfully",
      startTime: startTime,
      endTime: endTime,
      totalTime: totalTime,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};
