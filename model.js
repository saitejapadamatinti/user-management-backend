const mongoose = require("mongoose");

const RoleList = mongoose.Schema({
  role: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },

});

module.exports = mongoose.model("roleListData", RoleList);
