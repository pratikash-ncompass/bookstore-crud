import { executeQuery } from "../../utils/database.js";

export const updateAuthor = async (req, res) => {
  try {
    const st = performance.now();
    const ID = req.params.id;
    const { FIRST_NAME, LAST_NAME } = req.body;

    const checkQuery = `SELECT * FROM AUTHOR WHERE ID = "${ID}"`;
    const authorExists = await executeQuery(checkQuery);

    if (authorExists.length === 0) {
      return res.status(404).send({status:"false", message:"author not found!!"});
    }

    const query = `UPDATE AUTHOR SET FIRST_NAME = "${FIRST_NAME}", LAST_NAME = "${LAST_NAME}" WHERE ID = "${ID}"`;
    await executeQuery(query);

    const checkUpdate = `SELECT * FROM AUTHOR WHERE ID = "${ID}"`;
    const [result] = await executeQuery(checkUpdate);

    const et = performance.now();
    const tt = et - st;

    res.json({
      status: "true",
      message: "AUTHOR updated successfully",
      data: result,
      startTime: st,
      endTime: et,
      totalTime: tt,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internai server error");
  }
};
