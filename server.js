const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const router = require("./routes/contactRoutes");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contests", router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
