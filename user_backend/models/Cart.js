const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    cartItems: [
        {
            name: String,
            price: Number
        }
    ]
});

module.exports = mongoose.model('Cart', cartSchema);
