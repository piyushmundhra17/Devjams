// Get cart from local storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let totalPrice = 0;

// Select the cart items container and total price element
const cartItemsContainer = document.querySelector('.cart-items');
const totalPriceElement = document.getElementById('total-price');

// Display cart items
cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <h4>${item.name}</h4>
        <p>Price: ₹${item.price.toFixed(2)}</p>
    `;
    cartItemsContainer.appendChild(cartItem);

    // Calculate total price
    totalPrice += item.price;
});

// Display total price
totalPriceElement.textContent = totalPrice.toFixed(2);
