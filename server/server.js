const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const todoRoutes = require('./routes/todoRoutes');
app.use('/api/todos', todoRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
