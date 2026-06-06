const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');
const errorHandler = require('./middlewares/errorHandler');
const APIError = require('./utils/APIERROR');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
// app level middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/auth', authRoutes);
app.use('/posts', postRoutes);
app.use('/users', userRoutes);

// 404 Not Found fallback
app.use((req, res, next) => {
  next(new APIError(404, 'Page or endpoint not found.'));
});

// Global Error Handler middleware
app.use(errorHandler);


const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB!');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });