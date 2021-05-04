const express = require("express");
const router = express.Router();

const db = require("../models/db")


//get all the customers from the database
router.get("/",(req, res) => {
    db.query('SELECT * FROM customers',(err,data) => {
        if(err) throw err
        res.send(data.rows)
    })
})



//get all the customers with respect to id from the database
router.get("/:id",(req, res) => {
    const id = req.params.id
    db.query(`SELECT * FROM customers where id=${id}`,(err,data) => {
        if(err) throw err
        if(data.rows.length === 0) return res.send("No customers found with the given id")
        res.send(data.rows)
    })
})



//add new customer 
router.post("/add",(req, res) => {
    const {email,name,active} = req.body
    db.query('Insert into customers (email,name,active) values ($1,$2,$3)',[email,name,active],(err,data) => {
        if(err) throw err
        res.send("customer added successfully")
    })
})  


//update the existing customer with respect to id
router.put("/update/:id",(req, res) => {
    const {email,name,active} = req.body
    const id = req.params.id
    db.query(`UPDATE customers SET email = $1, name=$2, active=$3 where id=${id}`,[email,name,active],(err,data) => {
        if(err) throw err
        res.send("customer updated successfully")    
    })
})


//delete customer with respect to id from the database
router.delete("/delete/:id", (req, res) => {
    const id = req.params.id
    db.query(`DELETE FROM customers where id=${id}`,(err,data)=>{
        if(err) throw err
        res.send(`customer with id ${id} is deleted`)
    })
})



//delete all the customers from the database
router.delete("/delete_all", (req, res) => {
 
    db.query(`DELETE FROM customers`,(err,data)=>{
        if(err) throw err
        res.send(`all customers are deleted`)
    })
})

module.exports = router;