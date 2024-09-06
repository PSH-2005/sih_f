const express = require('express');
const router = express.Router();

// Route to render video chat page
router.get('/start', (req, res) => {
  res.render('videoChat', {
    roomId: 'room-' + Date.now(), // Create unique room ID for Jitsi session
    mentorName: req.user.full_name // Pass mentor name to the chat
  });
});

// Additional API endpoints can be added as required (e.g., for handling video room joining)
module.exports = router;
