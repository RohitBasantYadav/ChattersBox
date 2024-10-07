const ConversationModel = require("../../models/conversation.model");
const MessageModel = require("../../models/message.model");

const sendMessage = async(req,res)=>{
    try {
        const senderId = req.userId;
        const receiverId = req.params.id;
        const {message} = req.body;

        const userMessage = new MessageModel({senderId,receiverId,message});
        await userMessage.save()

        let initiatedConversation = await ConversationModel.findOne({participants:{$all:[senderId,receiverId]}})
        
        if(!initiatedConversation){
            initiatedConversation = new ConversationModel({participants:[senderId,receiverId]})
            await initiatedConversation.save();
        }

        if (userMessage){
            initiatedConversation.messages.push(userMessage._id)
            await initiatedConversation.save()
        }
        res.status(200).json({msg:`Messesage Send successfully`})

    } catch (error) {
        res.status(500).json({msg:`Internal server error`})
    }


    
}

module.exports = sendMessage