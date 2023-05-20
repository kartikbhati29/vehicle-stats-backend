const express = require("express");
const router = express.Router();

const {
  getVehicles,
  updateVehicleById,
  addVehicle,
  deleteVehicle,
  addVehicleExpense,
  getVehicleExpenses,
  deleteAllData,
} = require("../controllers/contactControllers");

router.route("/").get(getVehicles).post(addVehicle);
router.route("/expenses/:id").get(getVehicleExpenses);
router.route("/expenses/remove").post(deleteAllData);

router
  .route("/:id")
  .put(updateVehicleById)
  .delete(deleteVehicle)
  .post(addVehicleExpense);

module.exports = router;
