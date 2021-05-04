const private_data = require('../config/db.config')

const pg = require("pg").Pool

const dbpg = new pg({
    host:private_data.host,
    port:private_data.port,
    user:private_data.user,
    password:private_data.password,
    database:private_data.database,
})

module.exports = dbpg;