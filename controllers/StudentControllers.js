const Student = require('../models/Students');
class StudentsController {
  index(req, res) {
    Student.all((students) => {
      const data = {
        message: 'Menampilkan semua students',
        data: students,
      };

      res.json(data);
    });
  }
  async store(req, res) {
    // TODO : refactor to get data from db
    const result = await Student.create(req.body);

    const data = {
      message: `Menambahkan data student`,
      data: result,
    };

    res.json(data);
  }
  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;
    // TODO : refactor to get data from db
    studenst[id] = nama;
    const data = {
      message: `Mengedit student id ${id}, nama ${nama}`,
      data: studenst,
    };

    res.json(data);
  }
  destroy(req, res) {
    const { id } = req.params;
    // TODO : refactor to get data from db
    studenst.splice(id, 1);
    const data = {
      message: `Menghapus student id ${id}`,
      data: studenst,
    };

    res.json(data);
  }
}

const studentController = new StudentsController();

module.exports = studentController;
