const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const mongoString = process.env.DATABASE_URL;
const errorHandler = require("./middleware/errorHandler");
const router = require("./routes/contactRoutes");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(express.json());
app.use("/", router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
