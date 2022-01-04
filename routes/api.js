const StudentsController = require('../controllers/StudentControllers');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello express');
});

router.get('/students', StudentsController.index);
router.post('/students', StudentsController.store);
router.put('/students/:id', StudentsController.update);
router.delete('/students/:id', StudentsController.destroy);
router.get('/students/:id', StudentsController.show);

module.exports = router;
