const express = require('express');
const router = express.Router();
const flightRoutes = require('./flights');
const hotelRoutes = require('./hotels');
const activityRoutes = require('./activities');
const userRoutes = require('./users');

// Define main API routes
router.use('/flights', flightRoutes);
router.use('/hotels', hotelRoutes);
router.use('/activities', activityRoutes);
router.use('/users', userRoutes);

module.exports = router;

