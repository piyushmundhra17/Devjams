const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
    const { email, password, name } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'User already exists' });

    // Create new user
    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ email, password: hashedPassword, name });
    await user.save();

    res.json({ message: 'User created successfully' });
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, 'jwtSecret', { expiresIn: '1h' });

    res.json({ token });
});

module.exports = router;
