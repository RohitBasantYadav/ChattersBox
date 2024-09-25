require("dotenv").config();
const express = require("express");
const connection = require("./dbConfig/db.js");
const userRoute = require("./routes/user.route.js");

const PORT = process.env.PORT || 8000

const app = express();

app.use(express.json())
app.use("/auth",userRoute)

// Health Check Route
app.get("/",(_,res)=>{
    res.send("Health Check: Server is running fine")
});


app.listen(PORT,async()=>{
    await connection
    console.log("Server is running on port:",PORT,"connected to DB");
})

