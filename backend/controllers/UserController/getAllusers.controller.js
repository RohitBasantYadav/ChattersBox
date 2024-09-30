const mongoose = require("mongoose")
const UserModel = require("../../models/user.model")

const getAllUser = async (req,res)=>{
    const userId = req.userId;
    try {
        const users = await UserModel.find({_id:{$ne:userId}}).select("-password")
        console.log(users);
        res.send("test in get")
    } catch (error) {
        
    }
}

module.exports = getAllUser