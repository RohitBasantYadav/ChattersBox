const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"userDetail",
        required:true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"userDetail",
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{versionKey:false, timestamps:true})

const MessageModel = mongoose.model("message",messageSchema);

module.exports = MessageModel;