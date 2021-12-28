// Import database
const db = require('../config/database');

// membuat class model student
class Student {
  static all(callback) {
    const query = `SELECT * FROM students`;

    db.query(query, (err, results) => {
      callback(results);
    });
  }

  /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data student yang baru diinsert.
   */
  static async create(data) {
    const id = await new Promise((resolve, reject) => {
      const query = 'INSERT INTO students SET ? ';
      db.query(query, data, (err, results) => {
        if (err) reject(err);
        resolve(results.insertId);
      });
    });

    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM students WHERE id = ?';
      db.query(query, id, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }
}

// export class student
module.exports = Student;
