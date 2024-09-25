const UserModel = require("../../models/user.model");
const bcrypt = require("bcrypt")

const register = async (req, res) => {
    const { fullname, username, gender, password, profilePic } = req.body;
    try {
        if (fullname, username, gender, password) {
            const userRegistered = await UserModel.findOne({ username })
            if (userRegistered) {
                res.status(200).json({ msg: "User Already present please login" })
            } else {
                bcrypt.hash(password, 5, async function(err, hash) {
                    // Store hash in your password DB.
                    if(err){
                        res.status(400).json({msg:`Error while hashing the password, ${err}`})
                    }else{
                        const registerUser = new UserModel({ fullname, username, gender, password:hash, profilePic })
                        await registerUser.save();
                        res.status(201).json({msg:`User Regitered Successfully`})
                    }

                });
            }
        }else{
            res.status(400).json({msg:`Please provide all the details before Regitering`})
        }
    } catch (error) {
        res.status(500).json({msg:`Internal server issue, ${error}`})
    }
}

module.exports = register