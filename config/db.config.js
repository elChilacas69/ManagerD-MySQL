const mysql = require('msql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'your_database_name'
});

connection.connect(error => {
    if (error) throw error;
    console.log('Successfully connected to the database.');
});

module.exports = connection;
