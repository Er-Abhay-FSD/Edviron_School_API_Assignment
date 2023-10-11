const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  invoice: { type: mongoose.Schema.Types.ObjectId, ref: 'Invoice' },
  payment_attempt_details: Object,
  // Add other properties as needed
});

module.exports = mongoose.model('Transaction', transactionSchema);
