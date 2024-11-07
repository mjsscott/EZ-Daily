const express = require('express');
const router = express.Router();
const dailyController = require('../controllers/daily-controller')

router.get('/', dailyController.getAll);
router.get('/search', dailyController.roleAndAvailabilitySearch);

module.exports = router;