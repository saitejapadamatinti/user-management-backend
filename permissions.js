const mongoose = require("mongoose");

const Permissions = mongoose.Schema({
    permissionName: {
        type: "string",
        required: true,
    },
});

module.exports = mongoose.model("permission", Permissions);
