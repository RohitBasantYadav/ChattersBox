const express = require("express");
const register = require("../controllers/UserController/register.controller");
const login = require("../controllers/UserController/login.controller");

const userRoute = express.Router();

userRoute.post("/register",register)
userRoute.post("/login",login)

module.exports = userRoute;