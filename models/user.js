const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        minlength: 4,
        required: true,
    },
    password2: {
        type: String,
        minlength: 4,
        required: true,
    },
});

const User = mongoose.model("User", userSchema)
module.exports = User;