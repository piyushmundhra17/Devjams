let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display cart items
function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = ''; // Clear previous items
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <span>${item.name} - ₹${item.price}</span>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItemsDiv.appendChild(itemDiv);
            totalPrice += item.price; // Add to total price
        });
    }

    // Calculate and display billing details
    updateBilling(totalPrice);
}

// Function to update billing details
function updateBilling(subtotal) {
    const deliveryFee = 20.00;
    const gst = (subtotal * 0.05).toFixed(2);
    const grandTotal = (subtotal + deliveryFee + parseFloat(gst)).toFixed(2);

    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('delivery-fee').textContent = deliveryFee.toFixed(2);
    document.getElementById('gst').textContent = gst;
    document.getElementById('grand-total').textContent = grandTotal;
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove item from cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    displayCart(); // Refresh cart display
}

// Function to handle payment
function proceedToPayment() {
    if (cart.length === 0) {
        alert("Your cart is empty! Please add items to your cart before proceeding to payment.");
        return;
    }
    window.location.href = 'payment.html'; // Replace with your payment page
}

// Initial display of cart items
displayCart();
