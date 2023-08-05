const mongoose = require("mongoose");

const UserCredentials = mongoose.Schema({
  userName: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },

});

module.exports = mongoose.model("userCredentials", UserCredentials);
