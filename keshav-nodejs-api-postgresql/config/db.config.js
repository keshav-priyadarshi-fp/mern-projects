const dotenv = require("dotenv")

dotenv.config()

module.exports = {
    host:process.env.HOST,
    database_port:process.env.DATABASE_PORT,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
}