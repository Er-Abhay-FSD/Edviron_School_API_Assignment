const express = require('express');
const router = express.Router();
const feeHeadController = require('../controllers/feeHeadController');

// Create a new fee head
router.post('/', feeHeadController.createFeeHead);

// Get all fee heads
router.get('/', feeHeadController.getAllFeeHeads);

// Get a single fee head by ID
router.get('/:id', feeHeadController.getFeeHeadById);

// Update a fee head by ID
router.put('/:id', feeHeadController.updateFeeHeadById);

// Delete a fee head by ID
router.delete('/:id', feeHeadController.deleteFeeHeadById);

module.exports = router;
