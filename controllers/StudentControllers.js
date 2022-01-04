const Student = require('../models/Students');
class StudentsController {
  index(req, res) {
    Student.all((students) => {
      if (students.length > 0) {
        const data = {
          message: 'Menampilkan semua students',
          data: students,
        };

        return res.status(200).json(data);
      }

      const data = {
        message: 'Students is empty',
      };
      res.status(200).json(data);
    });
  }
  async store(req, res) {
    // TODO : refactor to get data from db
    const { nama, nim, email, jurusan } = req.body;

    if (!nama || !nim || !email || !jurusan) {
      const data = {
        message: 'Semua data harus di kirim ',
      };

      return res.status(422).json(data);
    }

    const result = await Student.create(req.body);

    const data = {
      message: `Menambahkan data student`,
      data: result,
    };

    return res.status(201).json(data);
  }
  async update(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      const student = await Student.update(id, req.body);
      const data = {
        message: 'Mengedit data students',
        data: student,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: 'Students not found',
      };
      res.status(404).json(data);
    }
  }
  async destroy(req, res) {
    const { id } = req.params;
    const students = await Student.find(id);

    if (students) {
      await Student.delete(id);
      const data = {
        message: 'Menghapus data students',
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: 'Students not found',
      };
      res.status(404).json(data);
    }
  }
  async show(req, res) {
    const { id } = req.params;
    const students = await Student.find(id);

    if (students) {
      const data = {
        message: 'Menampilkan detail students',
        data: students,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: 'Students not found',
      };
      res.status(404).json(data);
    }
  }
}

const studentController = new StudentsController();

module.exports = studentController;
