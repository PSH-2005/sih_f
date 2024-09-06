const User = require('../models/User');
const Plan = require('../models/Plan');

exports.getMenteeFeed = async (req, res) => {
  try {
    const mentorId = req.user._id;
    const feed = await Plan.find({ mentor_id: mentorId });
    res.render('menteeFeed', { feed });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching mentee feed');
  }
};

exports.assignMentee = async (req, res) => {
  const { mentorId, menteeId } = req.body;

  try {
    const mentor = await User.findById(mentorId);
    const mentee = await User.findById(menteeId);
    if (mentor && mentee) {
      // Assuming you have a mentor-mentee relationship model or logic
      // Add your mentor-mentee assignment logic here
      res.redirect('/dashboard');
    } else {
      res.status(404).send('Mentor or Mentee not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error assigning mentee');
  }
};
