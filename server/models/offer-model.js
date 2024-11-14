const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  dailyName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['design', 'set', 'admin', 'buyer'],  // You can adjust this based on your roles
    required: true,
  },
  location: {
    type: String,
    enum: ['london', 'manchester', 'birmingham', 'liverpool'],  // Adjust this for locations
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['PENDING', 'ACCEPTED', 'DECLINED'],
    default: 'PENDING',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;
