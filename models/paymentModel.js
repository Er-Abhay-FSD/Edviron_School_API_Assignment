const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  due: { type: mongoose.Schema.Types.ObjectId, ref: 'Due' },
  amount: Number,
  payment_date: Date,
  // Add other properties as needed
});

module.exports = mongoose.model('Payment', paymentSchema);
