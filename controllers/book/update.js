import { executeQuery } from "../../utils/database.js";

export const updateBook = async (req, res) => {
  try {
    const st = performance.now();

    const { ID, NAME, ISBN, EDITION } = req.body;
    const query = `UPDATE BOOK SET NAME = "${NAME}", ISBN = "${ISBN}", EDITION = "${EDITION}" WHERE ID = ${ID}`;
    await executeQuery(query);

    const checkUpdate = `SELECT * FROM BOOK WHERE ID = ${ID}`;
    const [result] = await executeQuery(checkUpdate);

    const et = performance.now();
    const tt = et - st;
    res.json({
      status: "true",
      message: "book updated successfully",
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
