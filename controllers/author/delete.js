import { executeQuery } from "../../utils/database.js";

export const deleteAuthor = async (req, res) => {
  try {
    const st = performance.now();
    const ID = req.params.id;

    const checkQuery = `SELECT * FROM AUTHOR WHERE ID = "${ID}"`;
    const authorExists = await executeQuery(checkQuery);

    if (authorExists.length === 0) {
      return res.status(404).send("author not found!!");
    }
    const query = `DELETE FROM AUTHOR WHERE ID = "${ID}"`;
    await executeQuery(query);

    const et = performance.now();
    const tt = et - st;

    res.send({
      status: true,
      message: "AUTHOR DELETED successfully",
      startTime: st,
      endTime: et,
      totalTime: tt,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
