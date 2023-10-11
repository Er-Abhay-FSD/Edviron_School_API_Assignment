const Defaulter = require('../models/defaulterModel');
const Invoice = require('../models/invoiceModel');
// Controller function to fetch all defaulters
// Controller function to fetch defaulters with unpaid dues
const fetchDefaulters = async (req, res) => {
  try {
    // Find unpaid invoices from the Invoice model
    const unpaidInvoices = await Invoice.find({ 'status': 'unpaid' });

    // Extract the student IDs from unpaid invoices
    const studentIds = unpaidInvoices.map((invoice) => invoice.student);

    // Find defaulters using the student IDs
    const defaulters = await Defaulter.find({ _id: { $in: studentIds } });

    res.json(defaulters);
  } catch (error) {
    console.error('Error fetching defaulters:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Controller function to create a new defaulter
const createDefaulter = async (req, res) => {
  try {
    const { studentId, name, defaulterDate } = req.body;
    const defaulter = new Defaulter({ studentId, name, defaulterDate });
    await defaulter.save();
    res.status(201).json(defaulter);
  } catch (error) {
    console.error('Error creating a defaulter:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function to update an existing defaulter
const updateDefaulter = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDefaulter = await Defaulter.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedDefaulter) {
      return res.status(404).json({ error: 'Defaulter not found' });
    }
    res.json(updatedDefaulter);
  } catch (error) {
    console.error('Error updating a defaulter:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function to delete a defaulter
const deleteDefaulter = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDefaulter = await Defaulter.findByIdAndRemove(id);
    if (!deletedDefaulter) {
      return res.status(404).json({ error: 'Defaulter not found' });
    }
    res.json(deletedDefaulter);
  } catch (error) {
    console.error('Error deleting a defaulter:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  fetchDefaulters,
  createDefaulter,
  updateDefaulter,
  deleteDefaulter,
};
