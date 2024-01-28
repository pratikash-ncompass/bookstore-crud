dotenv.config();
import express from "express";
import dotenv from "dotenv";
import compression from "compression";

import bookRouter from "./routes/bookRoutes.js";
import authorRouter from "./routes/authorRoutes.js";
import customerRouter from "./routes/customerRoutes.js";

const app = express();
// app.use(compression());
  app.use(express.json());
app.use("/book", bookRouter);
app.use("/author", authorRouter);
app.use("/customer", customerRouter);

app.get("/", (req, res) => {
  const payload = "Welcome to the Bookstore API!";
  res.send(payload.repeat(10000));
});
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 8080");
});
