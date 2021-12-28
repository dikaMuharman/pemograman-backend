// Import mysql
const mysql = require('mysql2');

require('dotenv').config();

// Destructing object process.env
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

/**
 * Membuat koneksi database menggunakan method create connection
 * method menerima parameter object: host, user, password, database
 */

const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

/**
 * Menghubungkan ke database menggunakan method connect
 * Menerima parameter callback
 */
db.connect((err) => {
  if (err) {
    console.log(`Error connecting ${err.stack}`);
  } else {
    console.log('Connected to database');
    return;
  }
});

module.exports = db;
