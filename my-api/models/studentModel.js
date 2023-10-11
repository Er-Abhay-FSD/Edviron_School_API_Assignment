const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  studentID: String,
  name: String,
  phone_number: [String],
  edviron_id: Number,
  school_generated_id: String,
  school_id: String,
  class: String,
  section: String,
  category: String,
  dob: Date,
  gender: String,
  previous_session_dues: Number,
  additional_details: {
    aadhaar_number: String,
    address: {
      father_name: String,
      mother_name: String,
    },
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

const students = mongoose.model('students', studentSchema);

module.exports = students;
