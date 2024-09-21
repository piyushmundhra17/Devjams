const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

let users = [];
let menuItems = [
    // Example menu items
    { name: "Butter Chicken", price: "950", image: "https://via.placeholder.com/100x100.png?text=Butter+Chicken", type: "non-veg" },
    { name: "Paneer Tikka", price: "650", image: "https://via.placeholder.com/100x100.png?text=Paneer+Tikka", type: "veg" },
    // Add other menu items...
];
let orders = [];

// User Authentication
app.post('/api/signup', (req, res) => {
    const { username, email, password } = req.body;
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        return res.status(400).json({ message: 'User already exists!' });
    }

    users.push({ username, email, password });
    res.status(201).json({ message: 'Signup successful!' });
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        res.status(200).json({ message: 'Login successful!', username: user.username });
    } else {
        res.status(401).json({ message: 'Invalid credentials!' });
    }
});

// Menu Management
app.get('/api/menu', (req, res) => {
    res.status(200).json(menuItems);
});

// Cart Management (optional)
let cart = []; // Example in-memory cart storage

app.get('/api/cart', (req, res) => {
    res.status(200).json(cart);
});

app.post('/api/cart', (req, res) => {
    const { item } = req.body;
    cart.push(item);
    res.status(200).json({ message: 'Item added to cart!' });
});

app.delete('/api/cart', (req, res) => {
    const { itemId } = req.body; // Assume itemId corresponds to item.name
    cart = cart.filter(item => item.name !== itemId);
    res.status(200).json({ message: 'Item removed from cart!' });
});

// Order Management
app.post('/api/orders', (req, res) => {
    const { order } = req.body;
    orders.push(order);
    res.status(200).json({ message: 'Order placed successfully!' });
});

app.get('/api/orders', (req, res) => {
    res.status(200).json(orders);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
