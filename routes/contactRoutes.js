const express = require("express");
const router = express.Router();

const {
  getVehicles,
  updateVehicleById,
  addVehicle,
  deleteExpense,
  addVehicleExpense,
  getVehicleExpenses,
  deleteAllData,
} = require("../controllers/contactControllers");

router.route("/").get(getVehicles).post(addVehicle);
router.route("/expenses/:id").get(getVehicleExpenses);
router.route("/expenses/remove").post(deleteExpense);

router.route("/:id").put(updateVehicleById).post(addVehicleExpense);

module.exports = router;
