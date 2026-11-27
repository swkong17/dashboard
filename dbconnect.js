//환경변수
require('dotenv').config();

//mysql
const mysql = require('mysql2/promise');

//dbconnect
const dbconfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit:5   

};

const compool = mysql.createPool(dbconfig);

module.exports = compool;