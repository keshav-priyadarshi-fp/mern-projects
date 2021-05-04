const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 2400

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const customers = require("./controllers/customer.controller")
app.use("/customers",customers)

app.get("/", (req, res) =>
    res.json({message:"Welcome to the customer management API"})  
)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
}) 