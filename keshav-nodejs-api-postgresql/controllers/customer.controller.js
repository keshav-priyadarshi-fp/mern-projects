const Customer = require("../models/customer.model")


module.exports = {

  getAllCustomer: (req, res) => {
    Customer.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data.rows);
    });
  },

  getCustomerById: (req, res) => {
    Customer.getById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.params.customerId
          });
        }
      }

      else {
        res.send(data.rows[0])
      }
    })
  },

  addCustomer: (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    // Save Customer in the database
    Customer.create(req.body, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
  },

  updateCustomer: (req, res) => {
    const { email, name, active } = req.body
    const id = req.params.id

    Customer.updateById(email, name, active, id, (err, data) => {
      if (err) {
        return res.status(500).send("Something went wrong")
      }
      else {
        res.send(data);
      }
    })
  },

  deleteCustomer: (req, res) => {
    const id = req.params.id
    Customer.delete(id, (err, data) => {
      if (err) {
        return res.status(500).send("Something went wrong")
      }
      else {
        res.send(data);
      }
    })
  },

  deleteAllCustomers: (req, res) => {
    Customer.deleteAll((err, data) => {
      if (err) {
        return res.status(500).send("Something went wrong")
      }
      else {
        res.send(data);
      }
    })
  }
  
}
