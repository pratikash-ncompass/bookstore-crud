import { executeQuery } from "../../utils/database.js";

export const updateCustomer = async (req, res) => {
  try {
    const st = performance.now();

    const ID = req.params.id;
    const { NAME, ADDRESS } = req.body;
    const checkQuery = `SELECT * FROM CUSTOMER WHERE ID = "${ID}"`;
    const customerExists = await executeQuery(checkQuery);

    // const fields = Object.keys(req.body);
    // console.log(fields);
    // fields.forEach((key, val) => console.log(key, val));

    if (customerExists.length === 0) {
      return res
        .status(404)
        .send({ status: "false", message: "customer not found!!" });
    }

    // const query = `UPDATE CUSTOMER SET NAME = "${NAME}", ADDRESS = "${ADDRESS}" WHERE ID = "${ID}"`;
    // await executeQuery(query);

    // const checkUpdate = `SELECT * FROM CUSTOMER WHERE ID = "${ID}"`;
    // const [result] = await executeQuery(checkUpdate);

    const et = performance.now();
    const tt = et - st;

    res.json({
      status: "true",
      message: "CUSTOMER updated successfully",
      data: result,
      startTime: st,
      endTime: et,
      totalTime: tt,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};
