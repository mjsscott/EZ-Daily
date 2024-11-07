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
      
      let query = {};
      if (role) {
        query.roles = role;
      }
      if (startDate) {
        query['availability.startDate'] = { $lte: new Date(startDate) };
        // query['availability.endDate'] = { $gte: new Date(endDate) };
      }
      const matches = Daily.find({
        "availability.startDate": {
          $lte: new Date("2024-11-08T10:05:46.693Z")
        }
      }, (err, result) => {
        if (err) {
          console.log(err)
        } else {
          console.log(result);
          res.status(200).json(result);
        }
      });
      // res.status(200).json(matches);
    } catch (err) {
      res.status(500).json({ message: "Error retreiving data", error: err});
      console.log(err);
    }

  }

}

module.exports = dailyController;