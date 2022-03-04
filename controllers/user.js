
const User = require("../models/user");

const userRegister = (req, res) => {
    res.json("register")
}

const userSignIn = (req, res) => {
    res.json("Signin ")
}

module.exports = {
    userRegister,
    userSignIn
}