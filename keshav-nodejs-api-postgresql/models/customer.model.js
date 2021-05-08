const db = require("./db")


// constructor
const Customer = function (customer) {
  this.email = customer.email;
  this.name = customer.name;
  this.active = customer.active;
};


Customer.getAll = result => {
  db.query("SELECT * FROM customers", (err, res) => {
    if (err) {
      // console.log("error: ", err);
      result(null, err);
    }

    // console.log("customers: ", res.rows);
    result(null, res);
  });
};

 
Customer.getById = (customerId, result) => {
  db.query(`SELECT * FROM customers WHERE id = ${customerId}`, (err, data) => {
    if (err) {
      // console.log("error: ", err);
      result(err, null);
      return;
    }

    if (data.rows.length === 0) {
      return result("No customers found with the given id", null);
    }

    result(null, data)
    return;
  });
};


Customer.create = (bodyData, result) => {
  db.query('Insert into customers (email,name,active) values ($1,$2,$3)', [bodyData.email, bodyData.name, bodyData.active], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(null, "added sucessfully");
  });
};


Customer.updateById = (email, name, active, id, result) => {
  db.query(`UPDATE customers SET email = $1, name=$2, active=$3 where id=${id}`, [email, name, active], (err, data) => {
    if (err) {
      result(null, "Something went wrong")
    }

    else {
      result(null, "customer updated successfully")
    }
  })
}


Customer.delete = (id, result) => {
  db.query(`DELETE FROM customers where id=${id}`, (err, data) => {
    if (err) {
      result(null, "Something went wrong")
    }
    result(null, `customer with id ${id} is deleted`)
  })
}


Customer.deleteAll = result => {
  db.query(`DELETE FROM customers`, (err, data) => {
    if (err) {
      result(null, "Something went wrong")
    }
    result(null, `all customers are deleted`)
  })
}


module.exports = Customer