const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  student_id: String, // Assuming student_id is a string
  timestamp: { type: Date, default: Date.now }, // Adding a timestamp field with a default value
});

module.exports = mongoose.model('Student', studentSchema);
