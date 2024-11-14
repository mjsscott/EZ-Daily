const Offer = require('../models/offer-model');

const offerController = {

  postOffer: async (req,res) => {
    const { dailyName, role, location, startDate, endDate } = req.body;

    if (!dailyName || !role || !location || !startDate || !endDate) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
      const newOffer = new Offer({
        dailyName,
        role,
        location,
        startDate,
        endDate,
        status: 'PENDING', 
      });

      await newOffer.save();
      
      res.status(201).json(newOffer);
    } catch (err) {
      console.error('Error creating offer:', err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  getAllOffers: async (req,res) => {
    try {
      const offers = await Offer.find();
      res.status(200).json(offers);
    } catch (err) {
      res.status(500).json({ message: 'error fetching offers', error: err});
    }
  }
}

module.exports = offerController;