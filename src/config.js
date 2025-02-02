const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    SERVER_PORT : process.env.SERVER_PORT,
    DB_HOST : process.env.DB_HOST,
    DB_PORT : process.env.DB_PORT,
    DB_USER : process.env.DB_USER,
    DB_PASSWORD : process.env.DB_PASSWORD,
    DB_DATABASE : process.env.DB_DATABASE
}