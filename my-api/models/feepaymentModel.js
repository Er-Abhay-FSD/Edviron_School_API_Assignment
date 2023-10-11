const mongoose = require('mongoose');

const feeDueSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'students',
  },
  fee_head: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FeeHead', // You may need to create a FeeHead schema if it doesn't exist
  },
  due_date: Date,
  timestamp: Date,
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

const Fee_Due = mongoose.model('FeeDue', feeDueSchema);

module.exports = Fee_Due;
