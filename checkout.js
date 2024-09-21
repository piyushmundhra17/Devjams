let cart = []; // Array to hold cart items

// Function to display cart items
function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = ''; // Clear previous items
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <span>${item.name} - ₹${item.price}</span>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
        totalPrice += item.price;
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove item from cart
    displayCart(); // Refresh cart display
}

// Example items added to the cart for testing
cart = [
    { name: 'Veg Burger', price: 50 },
    { name: 'Chicken Burger', price: 60 }
];

// Initial display of cart items
displayCart();
