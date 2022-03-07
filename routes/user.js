const express = require('express');
const router = express.Router()
const {userRegister, userSignIn} = require("../controllers/user")

router.post("/register", userRegister)
router.post('/signin', userSignIn);

module.exports = router;