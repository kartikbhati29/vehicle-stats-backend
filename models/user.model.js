const mongoose = require("mongoose");
const expenseSchema = require("./expense.modal");

const vehicleExpensesSchema = new mongoose.Schema({
  vehicleId: String,
  expensesList: [expenseSchema],
});

module.exports = mongoose.model("expenses", vehicleExpensesSchema);
