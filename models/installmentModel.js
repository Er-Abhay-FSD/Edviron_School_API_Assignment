const mongoose = require('mongoose');

const installmentSchema = new mongoose.Schema({
  dues: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Due' }],
  due_date: Date,
  // Add other properties as needed
});

module.exports = mongoose.model('Installment', installmentSchema);
