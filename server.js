require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const studentRoute = require('./routes/studentRoute');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/students', studentRoute);

//check
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        const server = app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

startServer();
