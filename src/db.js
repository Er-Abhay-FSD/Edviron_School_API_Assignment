const mongoose = require('mongoose');

// Replace 'your-database-connection-string' with your actual MongoDB connection string
const dbURI = 'mongodb+srv://assignment:edviron@cluster0.ebxruu8.mongodb.net';

// Create a function to connect to the database
const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit the application if the connection fails
  }
};

module.exports = connectToDatabase;
