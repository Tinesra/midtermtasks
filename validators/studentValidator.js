const { body, validationResult } = require('express-validator');

const studentValidationRules = [
    body('name').isString().withMessage('Name must be a string'),
    body('id').isString().withMessage('ID must be a string'),
    body('age').isNumeric().withMessage('Age must be a number'),
    body('email').isEmail().withMessage('Email must be a valid email address'),
];

const validateStudent = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    studentValidationRules,
    validateStudent,
};
