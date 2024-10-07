const ConversationModel = require("../../models/conversation.model");

const receiveMessage = async(req,res) =>{
    try {
        senderId = req.userId;
        receiverId = req.params.id;
        const conversation = await ConversationModel.findOne({participants:{$all:[senderId,receiverId]}}).populate("messages")
        res.status(200).json(conversation?.messages)
    } catch (error) {
        res.status(500).json({msg:`Internal server error: ${error}`})
    }
}


module.exports = receiveMessage