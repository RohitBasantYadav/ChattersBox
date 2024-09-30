const express = require("express");
const register = require("../controllers/UserController/register.controller");
const login = require("../controllers/UserController/login.controller");
const logout = require("../controllers/UserController/logout.controller");
const getAllUser = require("../controllers/UserController/getAllusers.controller");
const authenticationMiddleware = require("../middlewares/authentication.middleware");

const userRoute = express.Router();

userRoute.post("/register",register)
userRoute.post("/login",login)
userRoute.post("/logout",logout)
userRoute.get("/all-users",authenticationMiddleware,getAllUser)

module.exports = userRoute;