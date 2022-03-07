const jwt = require('jsonwebtoken')
require("dotenv").config()

const protected = (req, res, next) => {
    const token = req.header("x-auth-token")
    if (!token) {
        return res.status(400).send("No authorized ....")
    }

    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
        if (err) {
            return res.status(400).json({
                success: false,
                message: 'authentification failed ....!',
            });
        }
        req.user = decoded
        next();
    });
    
}

module.exports = protected