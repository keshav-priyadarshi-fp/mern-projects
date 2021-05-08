const express = require("express");
const router = express.Router();

// const {getAllCustomer, getCustomerById, addCustomer, updateCustomer, deleteCustomer, deleteAllCustomers} = require("../controllers/customer.controller")

const customerController = require("../controllers/customer.controller")

//get all the customers 
router.get("/",customerController.getAllCustomer)

//get all the customers with respect to id 
router.get("/:id", customerController.getCustomerById)

//add new customer
router.post("/add", customerController.addCustomer)

//update the existing customer with respect to id
router.put("/update/:id", customerController.updateCustomer)

//delete customer with respect to id
router.delete("/delete/:id", customerController.deleteCustomer)

//delete all the customers from the database
router.delete("/delete_all", customerController.deleteAllCustomers)


module.exports = router;