const express = require('express');
const router = express.Router();

// Example menu data
const menuItems = [
    { name: "Butter Chicken", price: 950, type: "non-veg" },
    { name: "Paneer Tikka", price: 650, type: "veg" },
    { name: "Biryani", price: 1200, type: "non-veg" },
    // Add other items
];

// Fetch menu items
router.get('/', (req, res) => {
    res.json(menuItems);
});

module.exports = router;
