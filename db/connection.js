const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'cookies',
    database: 'employeeDB',
},
    console.log('Connected to the employeeDB database')
);

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;