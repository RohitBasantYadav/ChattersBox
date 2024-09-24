require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

const connection = mongoose.connect(uri);

module.exports = connection;