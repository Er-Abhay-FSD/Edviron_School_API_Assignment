const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  dues: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Due' }],
  status: String,
  payments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Payment' }],
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  school: { type: mongoose.Schema.Types.ObjectId, ref: 'School' },
  fine_days: Number,
  fine_amount: Number,
  timestamp: Date,
  fee_breakup: {
    type: Object,  // You can define a more specific schema if needed
  },
  fee_total: Number,
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

module.exports = mongoose.model('Invoice', invoiceSchema);
