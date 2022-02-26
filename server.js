const express = require("express")
const cors = require('cors');
const app = express()

app.use(cors());
app.use(express.json())

const connectDB = require('./db.js')
const productRouter = require('./routes/product')

connectDB()

app.use("/api/products", productRouter)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('server running in port 5000');
});