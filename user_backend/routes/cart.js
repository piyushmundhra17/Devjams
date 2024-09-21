const express = require('express');
const Cart = require('../models/Cart');
const router = express.Router();

// Save cart items
router.post('/', async (req, res) => {
    const { userId, cartItems } = req.body;

    const cart = new Cart({ userId, cartItems });
    await cart.save();

    res.json({ message: 'Cart saved successfully' });
});

// Get cart items
router.get('/:userId', async (req, res) => {
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    res.json(cart.cartItems);
});

module.exports = router;
