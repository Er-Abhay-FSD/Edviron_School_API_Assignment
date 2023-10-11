const express = require('express');
const router = express.Router();
const installmentController = require('../controllers/installmentController');

// Create a new installment
router.post('/', installmentController.createInstallment);

// Get all installments
router.get('/', installmentController.getAllInstallments);

// Get a single installment by ID
router.get('/:id', installmentController.getInstallmentById);

// Update an installment by ID
router.put('/:id', installmentController.updateInstallmentById);

// Delete an installment by ID
router.delete('/:id', installmentController.deleteInstallmentById);

module.exports = router;
