const express = require('express');
const router = express.Router();
const FlightController = require('../controllers/FlightController');

// Define flight-related routes
router.post('/', FlightController.getFlights);
// Add more routes for flight-related operations

module.exports = router;

