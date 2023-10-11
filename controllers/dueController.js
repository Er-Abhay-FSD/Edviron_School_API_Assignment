const Due = require('../models/dueModel');

// Create a new due
exports.createDue = async (req, res) => {
  try {
    const { fee_head, due_date } = req.body;
    
    // Validate and perform any necessary checks before creating the due
    
    const newDue = new Due({ fee_head, due_date });
    await newDue.save();

    res.status(201).json(newDue);
  } catch (error) {
    console.error('Error creating due:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all dues
exports.getAllDues = async (req, res) => {
  try {
    const dues = await Due.find();

    res.status(200).json(dues);
  } catch (error) {
    console.error('Error fetching dues:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a single due by ID
exports.getDueById = async (req, res) => {
  try {
    const due = await Due.findById(req.params.id);

    if (!due) {
      return res.status(404).json({ error: 'Due not found' });
    }

    res.status(200).json(due);
  } catch (error) {
    console.error('Error fetching due by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a due by ID
exports.updateDueById = async (req, res) => {
  try {
    const { fee_head, due_date } = req.body;

    // Validate and perform any necessary checks before updating the due

    const due = await Due.findByIdAndUpdate(
      req.params.id,
      { fee_head, due_date },
      { new: true }
    );

    if (!due) {
      return res.status(404).json({ error: 'Due not found' });
    }

    res.status(200).json(due);
  } catch (error) {
    console.error('Error updating due by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a due by ID
exports.deleteDueById = async (req, res) => {
  try {
    const due = await Due.findByIdAndRemove(req.params.id);

    if (!due) {
      return res.status(404).json({ error: 'Due not found' });
    }

    res.status(204).end();
  } catch (error) {
    console.error('Error deleting due by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
