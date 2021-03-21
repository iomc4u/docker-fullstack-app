const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 10,
    // host: "mysql",
    // user: "root",
    // password: "iomc4u",
    // database: "myapp"
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
});

exports.pool = pool;