const express = require('express');
const router = express.Router();
const defaulterController = require('../controllers/defaulterController');

// Define a route to fetch defaulters
router.get('/', defaulterController.fetchDefaulters);

// Define routes for creating, updating, and deleting defaulters
router.post('/', defaulterController.createDefaulter);
router.put('/:id', defaulterController.updateDefaulter);
router.delete('/:id', defaulterController.deleteDefaulter);

module.exports = router;
