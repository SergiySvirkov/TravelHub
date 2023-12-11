const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Define user-related routes
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
// Add more routes for user-related operations

module.exports = router;

