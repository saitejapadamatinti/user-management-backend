const mongoose = require("mongoose");

const EmployeesData = mongoose.Schema({
  userName: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  firstName: {
    type: "string",
    required: true,
  },
  lastName: {
    type: "string",
    required: true,
  },
  mobile: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  designation: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("employeesData", EmployeesData);
