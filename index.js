const express = require('express');
const mongoose = require('mongoose');
const connectToDatabase = require('./src/db'); // Import the database connection function
const feeHeadRoutes = require('./routes/feeHeadRoutes'); // Import fee head routes
const dueRoutes = require('./routes/dueRoutes'); // Import due routes
const installmentRoutes = require('./routes/installmentRoutes'); // Import installment routes
const paymentRoutes = require('./routes/paymentRoutes'); // Import payment routes
const invoiceRoutes = require('./routes/invoiceRoutes'); // Import invoice routes
const transactionRoutes = require('./routes/transactionRoutes'); // Import transaction routes
const defaulterRoutes = require('./routes/defaulterRoutes');
const app = express();

// Connect to the MongoDB database
connectToDatabase();

// Middleware to parse JSON requests
app.use(express.json());

// Define routes for different models
app.use('/api/fee-heads', feeHeadRoutes);
app.use('/api/dues', dueRoutes);
app.use('/api/installments', installmentRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('./api/defaulters',defaulterRoutes);

// Handle unsupported routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
