// Handle quantity change and total price calculation
document.querySelectorAll('.cart-item input[type="number"]').forEach(item => {
    item.addEventListener('change', updateTotal);
});

// Remove item from the cart
document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.target.closest('.cart-item').remove();
        updateTotal();
    });
});

function updateTotal() {
    let totalItems = 0;
    let subtotal = 0;
    const deliveryFee = 3.99;

    document.querySelectorAll('.cart-item').forEach(item => {
        const quantity = item.querySelector('input[type="number"]').value;
        const price = parseFloat(item.querySelector('p:nth-of-type(2)').innerText.replace('Price: $', ''));

        totalItems += parseInt(quantity);
        subtotal += quantity * price;
    });

    document.querySelector('.cart-summary p:nth-of-type(1)').innerText = Items: ${totalItems};
    document.querySelector('.cart-summary p:nth-of-type(2)').innerText = Subtotal: $${subtotal.toFixed(2)};
    document.querySelector('.cart-summary p:nth-of-type(3)').innerText = `Delivery: $${delivery}