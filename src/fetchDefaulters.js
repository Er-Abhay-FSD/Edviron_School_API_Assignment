const mongoose = require('mongoose'); // Add this import
const connectToDatabase = require('./db'); // Import the connectToDatabase function
const Due = require('../models/dueModel');
const Invoice = require('../models/invoiceModel'); // Correct the import path

// Connect to the MongoDB database
connectToDatabase();

// Define an async function to fetch defaulters
async function fetchDefaulters() { // Add "async" here
  try {
    // Find all invoices with dues that are not paid
    const defaulters = await Invoice.find({
      'dues.status': 'unpaid', // Adjust this condition based on your schema
    });

    console.log('Defaulters:', defaulters);
  } catch (error) {
    console.error('Error fetching defaulters:', error);
  } finally {
    // Close the database connection when done
    mongoose.connection.close();
  }
}

// Call the fetchDefaulters function to start fetching defaulters
fetchDefaulters();
