import "dotenv/config";
import path from "node:path";

import express from "express";
import cors from "cors";
import connectDB from "./db/connection.js";
import syncDB from "./db/sync.js";

import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";
import FileUploadErrorHandler from "./middlewares/multerErrorHandler.js";
import areaRouter from "./routes/AreaRouter.js";
import usersRouter from "./routes/usersRouter.js";

const app = express();

// For static folders if will need it
// const publicDir = path.resolve("public");
// app.use(express.static(publicDir));

app.use(cors());
app.use(express.json());

app.use("/api/areas", areaRouter);
app.use("/api/users", usersRouter);

app.use("/", (req, res) => {
  res.send("Requested root path");
});

app.use(notFoundHandler);
app.use(FileUploadErrorHandler);
app.use(errorHandler);
await syncDB();
await connectDB();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
});
