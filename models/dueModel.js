const mongoose = require('mongoose');

const dueSchema = new mongoose.Schema({
  fee_head: { type: mongoose.Schema.Types.ObjectId, ref: 'FeeHead' },
  due_date: Date,
  amount: Number,
  description: String,
  // Add other properties as needed
});

// Export the 'Due' model using 'mongoose.model' directly
module.exports = mongoose.model('Due', dueSchema);
