const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    cartItems: [
        {
            name: String,
            price: Number
        }
    ],
    totalPrice: { type: Number, required: true }
});

module.exports = mongoose.model('Order', orderSchema);
