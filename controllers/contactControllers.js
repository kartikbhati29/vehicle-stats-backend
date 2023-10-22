//@desc Get all Vehivle
//@route GET /api/Vehivle
//@access public

const vehicles = require("../models/vehicles.model");
const expenses = require("../models/user.model");
const userModel = require("../models/user.model");

const getVehicles = async (req, res) => {
  const d = await vehicles.find();
  res.status(200).json({ status: "Get vehicle", list: d });
};

//@desc update contact by id
//@route PUT /api/Vehivle/id
//@access public

const updateVehicleById = (req, res) => {
  res.status(200).json({ status: `update Vehivle by id ${req.params.id}` });
};

//@desc new contact by id
//@route POST /api/Vehivle
//@access public

const addVehicle = async (req, res) => {
  const data = await vehicles.create(req.body);

  res.status(200).json({ status: `vehicle added successfully`, data: data });
};

const addVehicleExpense = async (req, res) => {
  const vehicleEntry = await expenses.findOne({ vehicleId: req.params.id });

  if (vehicleEntry?.vehicleId) {
    await expenses.updateOne(
      { vehicleId: req.params.id },
      {
        $set: {
          expensesList: [req.body.expenseObject, ...vehicleEntry.expensesList],
        },
      }
    );
  } else {
    await expenses.create({
      vehicleId: req.params.id,
      expensesList: [req.body.expenseObject],
    });
  }

  // const data = await expenses.create(req.body);
  res
    .status(200)
    .json({ status: `vehicle added successfully`, data: req.params.id });
};

const getVehicleExpenses = async (req, res) => {
  const data = await expenses.findOne({ vehicleId: req.params.id });
  res.status(200).json({ status: `expensesList`, data: data ? data : [] });
};

//@desc delete contact by id
//@route DELETE /api/Vehivle/id
//@access public

const deleteExpense = async (req, res) => {
  const foundData = await userModel.findOne({ vehicleId: req.body.vehicleId });
  let updatedList = [];
  if (foundData?.expensesList.length !== 0) {
    updatedList = foundData?.expensesList.filter((item) => {
      return item._id != req.body.expenseId;
    });
  }
  const updatedData = await userModel.updateOne(
    { vehicleId: req.body.vehicleId },
    {
      $set: { expensesList: updatedList },
    }
  );
  res
    .status(200)
    .json({ status: `delete contact by id ${req.body.vehicleId}` });
};

const editExpense = async (req, res) => {
  const id = req.params.id;
  const foundData = await userModel.findOne({ vehicleId: id });
  console.log(foundData);
  // const data = await expenses.deleteOne(req.params.id);
  res.status(200).json({ status: `delete contact by id ${req.params.id}` });
};

const deleteAllData = async (req, res) => {
  await expenses.deleteMany({});
  res.status(200).json({ status: `removed all expenses` });
};

module.exports = {
  getVehicles,
  updateVehicleById,
  addVehicle,
  deleteExpense,
  addVehicleExpense,
  getVehicleExpenses,
  deleteAllData,
};
