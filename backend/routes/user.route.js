const express = require("express");
const register = require("../controllers/UserController/register.controller");

const userRoute = express.Router();

userRoute.post("/register",register)


module.exports = userRoute;