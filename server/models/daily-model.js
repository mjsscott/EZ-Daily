const mongoose = require('mongoose');

const dailySchema = new mongoose.Schema({
  name: {type: String, required: true },
  roles: [
    {
      type: String,
      enum: ['design', 'set',  'admin', 'buyer'],
      required: false,
    }
  ], 
  availability: [
    {
      startDate: { type: Date, required: true},
      endDate: { type: Date, required: true },
    },
  ],
  cv: { 
    type: String,
    required: false,
  },
  imdbLink: {
    type: String,
    required: false,
    validate: {
      validator: function(v) {
        return /^https?:\/\/(www\.)?imdb\.com\/name\/nm\d+/.test(v);
      },
      message: props => `${props.value} is not a vaild IMDB URL!`
    }
  }
})

const Daily = mongoose.model('Daily', dailySchema);
module.exports = Daily;