const mongoose = require("mongoose");

// User Table
const crimeSchema = new mongoose.Schema(
  {
      reported_by: {
      type: String,
      required: true,
    },
      crime_type: {
      type: String,
      required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
      type: String,
      required: true
    },
    status: {
        type: String,
        default: "Pending",
    },
  },
  { timestamps: true }
);

const Crime = mongoose.model("crimes", crimeSchema);

module.exports = Crime;
