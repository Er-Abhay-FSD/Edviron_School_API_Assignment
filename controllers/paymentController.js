const Payment = require('../models/paymentModel');

// Create a new payment
exports.createPayment = async (req, res) => {
  try {
    const { due, amount, payment_date } = req.body;

    // Validate and perform any necessary checks before creating the payment

    const newPayment = new Payment({ due, amount, payment_date });
    await newPayment.save();

    res.status(201).json(newPayment);
  } catch (error) {
    console.error('Error creating payment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all payments
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find();

    res.status(200).json(payments);
  } catch (error) {
    console.error('Error fetching payments:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a single payment by ID
exports.getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);

    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    res.status(200).json(payment);
  } catch (error) {
    console.error('Error fetching payment by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a payment by ID
exports.updatePaymentById = async (req, res) => {
  try {
    const { due, amount, payment_date } = req.body;

    // Validate and perform any necessary checks before updating the payment

    const payment = await Payment.findByIdAndUpdate(
      req.params.id,
      { due, amount, payment_date },
      { new: true }
    );

    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    res.status(200).json(payment);
  } catch (error) {
    console.error('Error updating payment by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a payment by ID
exports.deletePaymentById = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndRemove(req.params.id);

    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    res.status(204).end();
  } catch (error) {
    console.error('Error deleting payment by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
