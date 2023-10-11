const mongoose = require('mongoose');

const dueSchema = new mongoose.Schema({
  fee_head: { type: mongoose.Schema.Types.ObjectId, ref: 'FeeHead' },
  due_date: Date,
  // Add other properties as needed
});

module.exports = mongoose.model('Due', dueSchema);
