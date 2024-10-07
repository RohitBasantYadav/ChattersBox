const UserModel = require("../../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        if (username && password) {
            const user = await UserModel.findOne({ username });
            if (user) {
                bcrypt.compare(password, user.password, function (err, result) {
                    if (result) {
                        const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET_KEY, { expiresIn: '1d' });
                        res.status(200).cookie("accessToken", accessToken, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict', secure: true }).json({
                            name: user.fullname,
                            username: user.username,
                            profilePic: user.profilePic
                        })
                    } else {
                        res.status(400).json({ msg: `Incorrect Password ${err}`})
                    }
                });
            } else {
                res.status(404).json({ msg: `Incorrect Username` });
            }
        } else {
            res.status(400).json({ msg: `Please provide all the details` });
        }
    } catch (error) {
        res.status(500).json({ msg: `Internal server error, ${error}` })
    }
}

module.exports = login