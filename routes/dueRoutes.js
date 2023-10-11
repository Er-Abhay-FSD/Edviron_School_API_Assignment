const express = require('express');
const router = express.Router();
const dueController = require('../controllers/dueController');

// Create a new due
router.post('/', dueController.createDue);

// Get all dues
router.get('/', dueController.getAllDues);

// Get a single due by ID
router.get('/:id', dueController.getDueById);

// Update a due by ID
router.put('/:id', dueController.updateDueById);

// Delete a due by ID
router.delete('/:id', dueController.deleteDueById);

module.exports = router;
