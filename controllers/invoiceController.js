const Invoice = require('../models/invoiceModel');

// Create a new invoice
exports.createInvoice = async (req, res) => {
  try {
    const { dues, status } = req.body;

    // Validate and perform any necessary checks before creating the invoice

    const newInvoice = new Invoice({ dues, status });
    await newInvoice.save();

    res.status(201).json(newInvoice);
  } catch (error) {
    console.error('Error creating invoice:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all invoices
exports.getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();

    res.status(200).json(invoices);
  } catch (error) {
    console.error('Error fetching invoices:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a single invoice by ID
exports.getInvoiceById = async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);

    if (!invoice) {
      return res.status(404).json({ error: 'Invoice not found' });
    }

    res.status(200).json(invoice);
  } catch (error) {
    console.error('Error fetching invoice by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update an invoice by ID
exports.updateInvoiceById = async (req, res) => {
  try {
    const { dues, status } = req.body;

    // Validate and perform any necessary checks before updating the invoice

    const invoice = await Invoice.findByIdAndUpdate(
      req.params.id,
      { dues, status },
      { new: true }
    );

    if (!invoice) {
      return res.status(404).json({ error: 'Invoice not found' });
    }

    res.status(200).json(invoice);
  } catch (error) {
    console.error('Error updating invoice by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete an invoice by ID
exports.deleteInvoiceById = async (req, res) => {
  try {
    const invoice = await Invoice.findByIdAndRemove(req.params.id);

    if (!invoice) {
      return res.status(404).json({ error: 'Invoice not found' });
    }

    res.status(204).end();
  } catch (error) {
    console.error('Error deleting invoice by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
