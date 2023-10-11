const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  dues: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Due' }],
  status: String,
  // Add other properties as needed
});

module.exports = mongoose.model('Invoice', invoiceSchema);
