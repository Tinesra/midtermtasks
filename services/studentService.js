const Student = require('../models/Student');

//1. post add student
const addStudent = async (studentData) => {
    const exists = await Student.findOne({ id: studentData.id });
    if (exists) {
        const error = new Error('Student with this ID already exists');
        error.statusCode = 400;
        throw error;
    }
    const studentCreated = await Student.create(studentData);
    return studentCreated;
};
//2. get list of all students
const getAllStudents = async () => {
    return await Student.find(); //.sort({createdAt:-1}); if want na sorted by created time
};
//3. get student by id
const getStudentById = async (id) => {
    return await Student.findById(id);
};
//4. update student by id
const updateStudent = async (id, studentData) => {
    return await Student.findByIdAndUpdate(id, studentData, { new: true, runValidators: true });
};
//5. delete student by id
const deleteStudent = async (id) => {
    return await Student.findByIdAndDelete(id);
}

module.exports = {
    addStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};