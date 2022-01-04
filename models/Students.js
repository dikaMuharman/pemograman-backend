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

    const students = this.find(id);
    return students;
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM students WHERE id = ?';
      db.query(sql, id, (err, results) => {
        const [student] = results;
        resolve(student);
      });
    });
  }

  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = 'UPDATE students SET ? WHERE id = ?';
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });

    const students = await this.find(id);
    return students;
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM students WHERE id = ?';
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }
}

// export class student
module.exports = Student;
