const mongoose = require('mongoose');

const feeDueSchema = new mongoose.Schema({
  fee_head: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FeeHead',
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'students',
  },
  due_date: Date,
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

const FeeDue = mongoose.model('fee_due', feeDueSchema);

module.exports = FeeDue;
