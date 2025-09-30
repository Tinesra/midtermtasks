const studentService = require('../services/studentService');

//1. post add student
const addStudent = async (req, res, next) => {
    try {
        const student = await studentService.addStudent(req.body);
        res.status(201).json(student);
    } catch (error) {
        next(error);
    }   
};
//2. get list of all students
const getAllStudents = async (req, res, next) => {
    try {
        const students = await studentService.getAllStudents();
        res.status(200).json(students);
    } catch (error) {
        next(error);
    }
};

//3. get student by id
const getStudentById = async (req, res, next) => {
    try {
        const student = await studentService.getStudentById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        next(error);
    }
};

//4. update student by id
const updateStudent = async (req, res, next) => {
    try {
        const updated = await studentService.updateStudent(req.params.id, req.body);
        if (!updated) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(updated);
    } catch (error) {
        next(error);
    }
};

//5. delete student by id
const deleteStudent = async (req, res, next) => {
    try {
        const deleted = await studentService.deleteStudent(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        next(error);
    }
};


module.exports = {
    addStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};  