const pgp = require("pg-promise")();
require("dotenv").config();

// Kết nối tới PostgreSQL
const db = pgp({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

// Test the connection
db.connect()
    .then(obj => {
        console.log('Database connection successful');
        obj.done(); // Release the connection
    })
    .catch(error => {
        console.error('Database connection failed:', error);
    });


module.exports = db;


