const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'gamedb_user',
    password: process.env.DB_PASSWORD || 'secret',
    database: process.env.DB_DATABASE || 'gamedb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool