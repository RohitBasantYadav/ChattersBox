const jwt = require("jsonwebtoken");

const authenticationMiddleware = (req, res, next) => {
    try {
        const token = req.cookies.accessToken;
        if (token) {
            jwt.verify(token,process.env.ACCESS_TOKEN_SECRET_KEY, function (err, decoded) {
                if(err){
                    return res.status(400).json({msg:`Error while verifying token ${err}`})
                }
                if(decoded){
                    req.userId = decoded.userId;
                    next()
                }
            });
        }else{
            res.status(401).json({msg:`User not found please login`})
        }
    } catch (error) {
        res.status(500).json({msg:`Internal server error ${error}`})
    }
}

module.exports = authenticationMiddleware