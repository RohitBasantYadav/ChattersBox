const express = require("express");
const register = require("../controllers/UserController/register.controller");
const login = require("../controllers/UserController/login.controller");
const logout = require("../controllers/UserController/logout.controller");

const userRoute = express.Router();

userRoute.post("/register",register)
userRoute.post("/login",login)
userRoute.post("/logout",logout)

module.exports = userRoute;