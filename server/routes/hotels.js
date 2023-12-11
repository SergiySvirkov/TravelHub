const express = require('express');
const router = express.Router();
const HotelController = require('../controllers/HotelController');

// Define hotel-related routes
router.post('/', HotelController.getHotels);
// Add more routes for hotel-related operations

module.exports = router;

