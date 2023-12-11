const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  // Add more fields as needed for hotels
});

const HotelModel = mongoose.model('Hotel', hotelSchema);

module.exports = HotelModel;

