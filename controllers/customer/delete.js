import { executeQuery } from "../../utils/database.js";

export const deleteCustomer = async (req, res) => {
  try {
    const st = performance.now();
    const ID = req.params.id;

    const checkQuery = `SELECT * FROM CUSTOMER WHERE ID = "${ID}"`;
    const customerExists = await executeQuery(checkQuery);

    if (customerExists.length === 0) {
      return res.status(404).send("customer not found!!");
    }
    const query = `DELETE FROM CUSTOMER WHERE ID = "${ID}"`;
    await executeQuery(query);

    const et = performance.now();
    const tt = et - st;

    res.send({
      status: true,
      message: "CUSTOMER DELETED successfully",
      startTime: st,
      endTime: et,
      totalTime: tt,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
