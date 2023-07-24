const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'secret',
    database: 'hof'
});
connection.connect()

module.exports = connection