import { executeQuery } from "../../utils/database.js";

export const insertNew = async (req, res) => {
  try {
    const startTime = new Date().getMilliseconds();

    const { ID, NAME, ISBN, EDITION } = req.body;

    const checkQuery = `SELECT * FROM BOOK WHERE ID = "${ID}"`;
    const checkID = await executeQuery(checkQuery);
    if (checkID.length !== 0) {
      return res.status(403).json({ message: "BOOK already exists." });
    }

    // if (checkID.length !== 0) {
    //   return res.json({
    //     status: "false",
    //     message: "Duplicate entry cannot be added",
    //   });
    // }

    const query = `INSERT INTO BOOK (ID, NAME, ISBN, EDITION) VALUES ("${ID}","${NAME}", "${ISBN}", "${EDITION}")`;
    await executeQuery(query);

    const endTime = new Date().getMilliseconds();
    const totalTime = endTime - startTime;

    res.send({
      status: "true",
      message: "New book added successfully",
      startTime: startTime,
      endTime: endTime,
      totalTime: totalTime,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};
