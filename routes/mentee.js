const express = require('express');
const router = express.Router();
const menteeController = require('../controllers/menteeController');

// Route to get the mentee feed for a mentor
router.get('/feed', menteeController.getMenteeFeed);

// Route to assign a mentor to a mentee
router.post('/assign', menteeController.assignMentee);

module.exports = router;
