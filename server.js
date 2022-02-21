const express = require("express")
const app = express()
const connectDB = require('./db.js')
const productRouter = require('./routes/product')

connectDB()


app.use("/api", productRouter)




app.listen('5000', () => {
    console.log('server running in port 5000');
});