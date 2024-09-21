const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Checkout route
router.post('/', async (req, res) => {
    const { userId, cartItems, totalPrice } = req.body;

    const order = new Order({ userId, cartItems, totalPrice });
    await order.save();

    res.json({ message: 'Order placed successfully' });
});

module.exports = router;
