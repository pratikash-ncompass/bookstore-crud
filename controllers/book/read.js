import { executeQuery } from "../../utils/database.js";

export const getAllBooks = async (req, res) => {
  try {
    const startTime = new Date().getMilliseconds();
    const query = "SELECT * FROM BOOK";
    const results = await executeQuery(query);
    if (results.length === 0) {
      res.status(404).json({ msg: "no books found" });
    }
    const endTime = new Date().getMilliseconds();
    const totalTime = endTime - startTime;
    res.send({
      status: true,
      message: "Book fetched successfully",
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

// Get a book by its ID
export const getBookByID = async (req, res) => {
  const startTime = new Date();

  const ID = req.params.id;

  const query = `SELECT * FROM BOOK WHERE ID = "${ID}"`;
  const [result] = await executeQuery(query);
  if (result.length === 0) {
    return res.status(404).json({ msg: "No book with this id" });
  }
  const endTime = new Date();
  const totalTime = endTime.getTime() - startTime.getTime();
  res.send({
    status: true,
    message: "Book fetched successfully",
    data: result,
    startTime: startTime,
    endTime: endTime,
    totalTime: totalTime,
  });
};
