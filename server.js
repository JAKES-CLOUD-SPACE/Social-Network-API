import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/api/users.js';
import thoughtRoutes from './routes/api/thoughts.js';

// Set up express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/social_network', {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
