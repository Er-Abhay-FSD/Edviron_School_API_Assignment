const FeeHead = require('../models/feeHeadModel');

// Create a new fee head
exports.createFeeHead = async (req, res) => {
  try {
    const { name, amount, frequency_months } = req.body;

    // Validate and perform any necessary checks before creating the fee head

    const newFeeHead = new FeeHead({ name, amount, frequency_months });
    await newFeeHead.save();

    res.status(201).json(newFeeHead);
  } catch (error) {
    console.error('Error creating fee head:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all fee heads
exports.getAllFeeHeads = async (req, res) => {
  try {
    const feeHeads = await FeeHead.find();

    res.status(200).json(feeHeads);
  } catch (error) {
    console.error('Error fetching fee heads:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a single fee head by ID
exports.getFeeHeadById = async (req, res) => {
  try {
    const feeHead = await FeeHead.findById(req.params.id);

    if (!feeHead) {
      return res.status(404).json({ error: 'Fee Head not found' });
    }

    res.status(200).json(feeHead);
  } catch (error) {
    console.error('Error fetching fee head by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a fee head by ID
exports.updateFeeHeadById = async (req, res) => {
  try {
    const { name, amount, frequency_months } = req.body;

    // Validate and perform any necessary checks before updating the fee head

    const feeHead = await FeeHead.findByIdAndUpdate(
      req.params.id,
      { name, amount, frequency_months },
      { new: true }
    );

    if (!feeHead) {
      return res.status(404).json({ error: 'Fee Head not found' });
    }

    res.status(200).json(feeHead);
  } catch (error) {
    console.error('Error updating fee head by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a fee head by ID
exports.deleteFeeHeadById = async (req, res) => {
  try {
    const feeHead = await FeeHead.findByIdAndRemove(req.params.id);

    if (!feeHead) {
      return res.status(404).json({ error: 'Fee Head not found' });
    }

    res.status(204).end();
  } catch (error) {
    console.error('Error deleting fee head by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
