import { executeQuery } from "../../utils/database.js";

export const deleteBook = async (req, res) => {
  try {
    const st = performance.now();
    const ID = req.params.id;

    const checkQuery = `SELECT * FROM BOOK WHERE ID = "${ID}"`;
    const bookExists = await executeQuery(checkQuery);

    if (bookExists.length === 0) {
      return res.status(404).send("book not found!!");
    }
    const query = `DELETE FROM BOOK WHERE ID = "${ID}"`;
    await executeQuery(query);

    const et = performance.now();
    const tt = et - st;

    res.send({
      status: true,
      message: "Book DELETED successfully",
      startTime: st,
      endTime: et,
      totalTime: tt,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
