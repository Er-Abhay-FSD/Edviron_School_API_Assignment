const Transaction = require('../models/transactionModel');

// Create a new transaction
exports.createTransaction = async (req, res) => {
  try {
    const { invoice, payment_attempt_details } = req.body;

    // Validate and perform any necessary checks before creating the transaction

    const newTransaction = new Transaction({ invoice, payment_attempt_details });
    await newTransaction.save();

    res.status(201).json(newTransaction);
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all transactions
exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();

    res.status(200).json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a single transaction by ID
exports.getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.status(200).json(transaction);
  } catch (error) {
    console.error('Error fetching transaction by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a transaction by ID
exports.updateTransactionById = async (req, res) => {
  try {
    const { invoice, payment_attempt_details } = req.body;

    // Validate and perform any necessary checks before updating the transaction

    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { invoice, payment_attempt_details },
      { new: true }
    );

    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.status(200).json(transaction);
  } catch (error) {
    console.error('Error updating transaction by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a transaction by ID
exports.deleteTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndRemove(req.params.id);

    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.status(204).end();
  } catch (error) {
    console.error('Error deleting transaction by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
