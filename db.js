require('dotenv').config()
const mongoose = require('mongoose')
const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("dbconnection was successful"))
        .catch(e => console.log(e))
}


module.exports = connectDB;