let mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'newuser',
        password: '123123',
        database: 'payfast'
    });
}

module.exports = function() {
    return createDBConnection;
}