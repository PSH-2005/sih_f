const express = require('express');
const mentorController = require('../controllers/mentorController');
const router = express.Router();

router.get('/plans', mentorController.getPlans);
router.post('/plans', mentorController.createPlan);

module.exports = router;
