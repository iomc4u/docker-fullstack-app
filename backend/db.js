const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "mysql",
    user: "root",
    password: "iomc4u",
    database: "myapp"
});

exports.pool = pool;