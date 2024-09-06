// app.js
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('./config/passport-config');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const mentorRoutes = require('./routes/mentor');
const videoRoutes = require('./routes/video');
const aiRoutes = require('./routes/ai');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set up EJS as view engine
app.set('view engine', 'ejs');

// Connect to MongoDB
connectDB();

// Session and passport initialization
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);
app.use('/mentor', mentorRoutes);
app.use('/video', videoRoutes);
app.use('/ai', aiRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/dashboard', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('dashboard', { user: req.user });
  } else {
    res.redirect('/auth/login');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

