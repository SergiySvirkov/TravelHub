const express = require('express');
const router = express.Router();
const ActivityController = require('../controllers/ActivityController');

// Define activity-related routes
router.post('/', ActivityController.getActivities);
// Add more routes for activity-related operations

module.exports = router;
