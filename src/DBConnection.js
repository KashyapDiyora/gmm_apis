const mysql = require('mysql2');
const {DB_HOST,DB_PORT,DB_USER,DB_PASSWORD,DB_DATABASE} = require('./config.js')

const conn = mysql.createPool({
    host : DB_HOST,
    port : DB_PORT,
    user : DB_USER,
    password : DB_PASSWORD,
    database : DB_DATABASE,
    connectionLimit : 10
}).promise();

conn.getConnection((err,connection) => {
    if(err){
        console.log(err);
    }
    else
    {
        console.log("Succesfully DB Connected");
    }
})

module.exports = {conn};