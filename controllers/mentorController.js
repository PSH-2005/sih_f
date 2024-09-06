const pool = require('../config/db');

exports.getPlans = async (req, res) => {
  const mentorId = req.user.id;
  const plans = await pool.query('SELECT * FROM plans WHERE mentor_id = $1', [mentorId]);
  res.render('mentor-plans', { plans: plans.rows });
};

exports.createPlan = async (req, res) => {
  const { title, description } = req.body;
  const mentorId = req.user.id;
  await pool.query('INSERT INTO plans (title, description, mentor_id) VALUES ($1, $2, $3)', [title, description, mentorId]);
  res.redirect('/mentor/plans');
};
