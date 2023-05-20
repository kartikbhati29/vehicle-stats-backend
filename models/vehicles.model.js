const mongoose = require("mongoose");

const vehiclesSchema = new mongoose.Schema({
  vehicleName: String,
  vehicleNumber: String,
  vehicleLogs: [
    {
      amount: String,
      kilometers: String,
      timeStamp: Date,
      type: String,
      description: String,
      fuelPrice: String,
    },
  ],
});

module.exports = mongoose.model("vehicles", vehiclesSchema);
