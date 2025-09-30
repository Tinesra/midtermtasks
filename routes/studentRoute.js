const express = require('express');
const router = express.Router();

const controller = require('../controllers/studentController');
const { studentValidationRules, validateStudent } = require('../validators/studentValidator');

router.post('/', studentValidationRules, validateStudent, controller.addStudent);
router.get('/', controller.getAllStudents);
router.get('/:id', controller.getStudentById);
router.put('/:id', studentValidationRules, validateStudent, controller.updateStudent);
router.delete('/:id', controller.deleteStudent);

module.exports = router;