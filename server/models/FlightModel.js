const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    required: true,
  },
  departure: {
    type: Date,
    required: true,
  },
  arrival: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  // Add more fields as needed for flights
});

const FlightModel = mongoose.model('Flight', flightSchema);

module.exports = FlightModel;

