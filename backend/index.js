require("dotenv").config();
const express = require("express");
const connection = require("./dbConfig/db.js");
const userRoute = require("./routes/user.route.js");
const cookieParser = require("cookie-parser");
const authenticationMiddleware = require("./middlewares/authentication.middleware.js");

const PORT = process.env.PORT || 8000

const app = express();

app.use(express.json())
app.use(cookieParser())
app.use("/auth",userRoute)

// Health Check Route
app.get("/",authenticationMiddleware,(_,res)=>{
    res.send("Health Check: Server is running fine")
});


app.listen(PORT,async()=>{
    await connection
    console.log("Server is running on port:",PORT,"connected to DB");
})

