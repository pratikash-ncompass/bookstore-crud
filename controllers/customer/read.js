import { executeQuery } from "../../utils/database.js";

export const getAllCustomers = async (req, res) => {
  try {
    const startTime = new Date().getMilliseconds();
    const query = "SELECT * FROM CUSTOMER";
    const results = await executeQuery(query);
    if (results.length === 0) {
      res.status(404).json({ msg: "no customer found" });
    }
    const endTime = new Date().getMilliseconds();
    const totalTime = endTime - startTime;
    res.send({
      status: true,
      message: "Customer fetched successfully",
      data: results,
      startTime: startTime,
      endTime: endTime,
      totalTime: totalTime,
    });
  } catch (error) {
    console.log("Something is wrong, cannot get books!");
    return res.status(500).send(error);
  }
};

// get customer by ID
export const getCustomerByID = async (req, res) => {
  const startTime = new Date();

  const ID = req.params.id;

  const query = `SELECT * FROM CUSTOMER WHERE ID = "${ID}"`;
  const result = await executeQuery(query);
  if (result.length === 0) {
    return res.status(404).json({ msg: "No customer with this id" });
  }
  const endTime = new Date();
  const totalTime = endTime.getTime() - startTime.getTime();
  res.send({
    status: true,
    message: "Customer fetched successfully",
    data: result,
    startTime: startTime,
    endTime: endTime,
    totalTime: totalTime,
  });
};
