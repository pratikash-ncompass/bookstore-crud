import { executeQuery } from "../../utils/database.js";

export const addAuthor = async (req, res) => {
  try {
    const startTime = new Date().getMilliseconds();

    const { ID, FIRST_NAME, LAST_NAME } = req.body;

    const checkQuery = `SELECT * FROM AUTHOR WHERE ID = "${ID}"`;
    const authorExists = await executeQuery(checkQuery);
    if (authorExists.length !== 0) {
      return res.status(403).json({ message: "Author already exists." });
    }

    const query = `INSERT INTO AUTHOR (ID, FIRST_NAME, LAST_NAME) VALUES ("${ID}", "${FIRST_NAME}", "${LAST_NAME}")`;
    await executeQuery(query);

    const endTime = new Date().getMilliseconds();
    const totalTime = endTime - startTime;

    res.send({
      status: "true",
      message: "New Author added successfully",
      startTime: startTime,
      endTime: endTime,
      totalTime: totalTime,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};
