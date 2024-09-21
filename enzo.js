let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add item to cart
function addToCart(item) {
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart)); // Store cart in localStorage
    alert(`${item.name} has been added to your cart!`);
}

// Attach event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        const item = {
            name: button.getAttribute('data-item'),
            price: parseFloat(button.getAttribute('data-price'))
        };
        addToCart(item);
    });
});
