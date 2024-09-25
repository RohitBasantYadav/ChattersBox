const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
    participants:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"userDetail"
    }],
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"message"
    }]
},{versionKey:false, timestamps:true})

const ConversationModel = mongoose.model("conversation",conversationSchema);

module.exports = ConversationModel