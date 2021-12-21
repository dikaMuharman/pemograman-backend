// TODO 3: Import data students dari folder data/students.js
const studenst = require('../data/Students');
// TODO 4: Membuat class StudentsController
class StudentsController {
  index(req, res) {
    // TODO 5: Tampilkan data students
    const data = {
      message: 'Menampilkan semua students',
      data: studenst,
    };

    res.json(data);
  }
  store(req, res) {
    // TODO 6: Tambah data students
    const { nama } = req.body;

    const data = {
      message: `Menambahkan data student ${nama}`,
      data: [nama, ...studenst],
    };

    res.json(data);
  }
  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;
    // TODO 7: Update data students
    studenst[id] = nama;
    const data = {
      message: `Mengedit student id ${id}, nama ${nama}`,
      data: studenst,
    };

    res.json(data);
  }
  destroy(req, res) {
    const { id } = req.params;
    // TODO 8: Hapus data students
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
