let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.getAttribute('data-item');
        const itemPrice = parseFloat(button.getAttribute('data-price'));

        // Create cart item object
        const cartItem = {
            name: itemName,
            price: itemPrice
        };

        // Add item to cart
        cart.push(cartItem);

        // Save cart to local storage
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${itemName} added to the cart.`);
    });
});
