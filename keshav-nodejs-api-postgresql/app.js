const express = require('express')
const app = express()

const port = process.env.PORT || 2400

app.use(express.json())

const route = require("./routes/customer.route")
app.use("/customers", route)


app.get("/", (req, res) =>
    res.json({message:"Welcome to the customer management API"})  
)
 
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})