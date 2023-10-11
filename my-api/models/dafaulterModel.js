const mongoose = require('mongoose');

const defaulterSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student', // Reference to the Student model
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  // Add other fields specific to your defaulter records
  // For example, date, amount, or additional details
  // Example:
  defaulterDate: {
    type: Date,
    required: true,
  },
});

const Defaulter = mongoose.model('Defaulter', defaulterSchema);

module.exports = Defaulter;
