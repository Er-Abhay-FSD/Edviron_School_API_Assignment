const Installment = require('../models/installmentModel');

// Create a new installment
exports.createInstallment = async (req, res) => {
  try {
    const { dues, due_date } = req.body;

    // Validate and perform any necessary checks before creating the installment

    const newInstallment = new Installment({ dues, due_date });
    await newInstallment.save();

    res.status(201).json(newInstallment);
  } catch (error) {
    console.error('Error creating installment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all installments
exports.getAllInstallments = async (req, res) => {
  try {
    const installments = await Installment.find();

    res.status(200).json(installments);
  } catch (error) {
    console.error('Error fetching installments:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a single installment by ID
exports.getInstallmentById = async (req, res) => {
  try {
    const installment = await Installment.findById(req.params.id);

    if (!installment) {
      return res.status(404).json({ error: 'Installment not found' });
    }

    res.status(200).json(installment);
  } catch (error) {
    console.error('Error fetching installment by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update an installment by ID
exports.updateInstallmentById = async (req, res) => {
  try {
    const { dues, due_date } = req.body;

    // Validate and perform any necessary checks before updating the installment

    const installment = await Installment.findByIdAndUpdate(
      req.params.id,
      { dues, due_date },
      { new: true }
    );

    if (!installment) {
      return res.status(404).json({ error: 'Installment not found' });
    }

    res.status(200).json(installment);
  } catch (error) {
    console.error('Error updating installment by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete an installment by ID
exports.deleteInstallmentById = async (req, res) => {
  try {
    const installment = await Installment.findByIdAndRemove(req.params.id);

    if (!installment) {
      return res.status(404).json({ error: 'Installment not found' });
    }

    res.status(204).end();
  } catch (error) {
    console.error('Error deleting installment by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
