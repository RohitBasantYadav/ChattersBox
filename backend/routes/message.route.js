const express = require("express");
const sendMessage = require("../controllers/MessageControllers/sendMessage.controller");
const receiveMessage = require("../controllers/MessageControllers/receiveMessage.controller");

const messageRouter = express.Router();

messageRouter.post("/send/:id",sendMessage)
messageRouter.get("/receive/:id",receiveMessage)


module.exports = messageRouter