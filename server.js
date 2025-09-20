// server.js
const express = require('express');
const connectDB = require('./db');
const productRoutes = require('./routes/productRoutes');

// Connect to the database
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use the product routes
app.use('/api/products', productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});