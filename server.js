const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const corsOpts = {
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
  origin: "http://localhost:3000",
  exposedHeaders: ["set-cookie"],
};

const mongoString =
  "mongodb+srv://kartikbhati29:yjkOnTXP8Tm7HwDi@cluster0.a50wmio.mongodb.net/";
const errorHandler = require("./middleware/errorHandler");
const router = require("./routes/contactRoutes");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
mongoose.connect(mongoString, { useNewUrlParser: true });
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(express.json());
app.use(cors(corsOpts));
app.use("/", router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
