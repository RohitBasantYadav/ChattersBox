const mongoose = require("mongoose");

userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        enum:["male","female"],
        required:true
    }
},{versionKey:false, timestamps:true})

const UserModel = mongoose.model("userDetail",userSchema);

module.exports = UserModel;