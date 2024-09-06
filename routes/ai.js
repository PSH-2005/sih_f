const express = require('express');
const aiController = require('../controllers/aiController');
const router = express.Router();

router.get('/mentor/:mentorId/analysis', aiController.getAnalysis);

module.exports = router;
