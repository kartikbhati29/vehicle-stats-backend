const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  amount: String,
  kilometers: String,
  timeStamp: Date,
  type: String,
  description: String,
  fuelPrice: String,
});

module.exports = mongoose.model("expense", expenseSchema);

module.exports = expenseSchema;
