const express = require("express");
const mongoose = require("mongoose");
const RoleList = require("./model");
// const userEmails = require("./email")
const Permissions = require("./permissions");
const UserCredentials = require("./userCredential");
const EmployeesData = require("./employeesData");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

mongoose
  .connect(
    "mongodb+srv://saitejapadamatinti1:saitejapadamatinti@cluster0.7ix0r9p.mongodb.net/?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => console.log("db is connected"))
  .catch((err) => console.log(err));

app.post("/roles", async (req, res) => {
  const { role, description } = req.body;
  try {
    const newData = new RoleList({
      role: role,
      description: description,
    });
    await newData.save();
    return res.json(await RoleList.find());
  } catch (err) {
    console.log(err.message);
  }
});

app.put("/roles", async (req, res) => {
  const updatingData = ({ _id, blogImage, bloghead } = req.body);
  try {
    const oldRole = await RoleList.findById(_id);
    await RoleList.replaceOne(oldRole, updatingData);
    return res.json(await RoleList.find());
  } catch (error) {
    console.log(error);
  }
});

app.get("/roles", async (req, res) => {
  try {
    const allRoles = await RoleList.find();
    return res.send(allRoles);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/roles/:id", async (req, res) => {
  try {
    await RoleList.findByIdAndDelete(req.params.id);
    return res.json(await RoleList.find());
  } catch (error) {
    console.log(error);
  }
});

// permissions data

app.get("/permissions", async (req, res) => {
  try {
    const allPermissions = await Permissions.find();
    return res.send(allPermissions);
  } catch (error) {
    console.log(error);
  }
});

app.post("/permissions", async (req, res) => {
  const { permissionName } = req.body;
  try {
    const newData = new Permissions({
      permissionName: permissionName,
    });
    await newData.save();
    return res.json(await Permissions.find());
  } catch (err) {
    console.log(err.message);
  }
});

app.put("/permissions", async (req, res) => {
  const updatingData = ({ _id, permissionName } = req.body);
  try {
    const oldPermissionName = await Permissions.findById(_id);
    await Permissions.replaceOne(oldPermissionName, updatingData);
    return res.json(await Permissions.find());
  } catch (error) {
    console.log(error);
  }
});

app.delete("/permissions/:id", async (req, res) => {
  try {
    await Permissions.findByIdAndDelete(req.params.id);
    return res.json(await Permissions.find());
  } catch (error) {
    console.log(error);
  }
});

// User Credentials

app.get("/usersData", async (req, res) => {
  try {
    const allUserData = await UserCredentials.find();
    return res.send(allUserData);
  } catch (error) {
    console.log(error);
  }
});

app.post("/usersData", async (req, res) => {
  const { userName, password } = req.body;
  try {
    const newData = new UserCredentials({
      userName: userName,
      password: password,
    });
    await newData.save();
    return res.json(await UserCredentials.find());
  } catch (err) {
    console.log(err.message);
  }
});

app.put("/usersData", async (req, res) => {
  const updatingData = ({ _id, userName, password } = req.body);
  try {
    const oldCredentionals = await Permissions.findById(_id);
    await UserCredentials.replaceOne(oldCredentionals, updatingData);
    return res.json(await UserCredentials.find());
  } catch (error) {
    console.log(error);
  }
});

app.delete("/usersData/:id", async (req, res) => {
  try {
    await UserCredentials.findByIdAndDelete(req.params.id);
    return res.json(await UserCredentials.find());
  } catch (error) {
    console.log(error);
  }
});

// employees data

app.get("/employeesData", async (req, res) => {
  try {
    const allEmployeesData = await EmployeesData.find();
    return res.send(allEmployeesData);
  } catch (error) {
    console.log(error);
  }
});

app.post("/employeesData", async (req, res) => {
  const {
    userName,
    password,
    firstName,
    lastName,
    mobile,
    email,
    designation,
  } = req.body;
  try {
    const newData = new EmployeesData({
      userName: userName,
      password: password,
      firstName: firstName,
      lastName: lastName,
      mobile: mobile,
      email: email,
      designation: designation,
    });
    await newData.save();
    return res.json(await EmployeesData.find());
  } catch (err) {
    console.log(err.message);
  }
});

app.put("/employeesData", async (req, res) => {
  const updatingData = ({
    _id,
    userName,
    password,
    firstName,
    lastName,
    mobile,
    email,
    designation,
  } = req.body);
  try {
    const oldCredentionals = await EmployeesData.findById(_id);
    await EmployeesData.replaceOne(oldCredentionals, updatingData);
    return res.json(await EmployeesData.find());
  } catch (error) {
    console.log(error);
  }
});

app.delete("/employeesData/:id", async (req, res) => {
  try {
    await EmployeesData.findByIdAndDelete(req.params.id);
    return res.json(await EmployeesData.find());
  } catch (error) {
    console.log(error);
  }
});

app.listen(3005, () => console.log("surver runnig"));
