const Daily = require('../models/daily-model');

const dailyController = {

  getAll: async (req,res) => {
    try {
      const dailies = await Daily.find();
      res.json(dailies);
    } catch (err) {
      console.error('Error during search:', err);
      res.status(500).send({ message: 'Error retrieving dailies', error: err});
    }
  },

  roleAndAvailabilitySearch: async (req,res) => {
    try {
     
      const { role, startDate, endDate } = req.query;
      const query = { roles: { $in: [role]}};
      const roleMatches = await Daily.find(query);

      const start = new Date(startDate);
      const end = new Date(endDate);

      const availableMatches = roleMatches.filter(doc => {
        return doc.availability.some(period => {
          return period.startDate <= start && period.endDate >= end;
        })
      })

      res.status(200).json(availableMatches);
    } catch (err) {
      res.status(500).json({ message: "Error retreiving data", error: err});
      console.log(err);
    }

  }

}


module.exports = dailyController;