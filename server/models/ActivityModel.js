const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  // Add more fields as needed for activities
});

const ActivityModel = mongoose.model('Activity', activitySchema);

module.exports = ActivityModel;
