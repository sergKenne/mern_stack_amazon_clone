const User = require("../models/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()


/* registration */
const userRegister = async (req, res) => {
    const {name, email, password, password2 } = req.body
    const userExist = await User.findOne({ email })
    console.log("userExist:", userExist);
    if (userExist) {
        return res.status(401).json({
            success: false,
            message: "user already exist!"
        })
    }

    if (password === password2) {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        
        const user = new User({
            name,
            email,
            password: hashPassword,
            password2: hashPassword,
        });

        try {
            await user.save();
            res.status(200).json({
                success: true,
                message: 'user has been add successfully',
            });
        } catch (error) {
            res.state(401).json({
                success: false,
                message: error.message
            })
        }
        
    } else {
        return res.json(" please check the password ")
    }
}

// sign in
const userSignIn = async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({ email });
    console.log("user:", user);
    if (!user) {
        return res.status(400).json({
            success: false,
            message: "user not exist please try another email"
        })
    }
    bcrypt.compare(password, user.password, function (err, response) {
        if (err) {
            res.state(400).json({
                success: false,
                message: "password is not correct"
            })
        }
        const token = jwt.sign({ _id: user._id, email: user.email, name: user.name }, process.env.SECRET_KEY)
        if (token) {
            //localStorage.setItem("token",token)
            res.json({
                success: true,
                user: user,
                msg:"user login successfully",
                token
            })
        }
    });
}

module.exports = {
    userRegister,
    userSignIn
}