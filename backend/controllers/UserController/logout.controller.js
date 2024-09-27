const logout = (req,res)=>{
    try {
        res.status(200).cookie("accessToken","",{maxAge:0}).json({msg:`Logout successful`})
    } catch (error) {
        res.status(500).json({msg:`Internal Server error: ${error}`})
    }
}

module.exports = logout