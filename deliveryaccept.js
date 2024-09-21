document.addEventListener("DOMContentLoaded", function () {
    const order = {
        items: [
            { name: "Pizza", price: 12.99 },
            { name: "Burger", price: 8.99 },
            { name: "Fries", price: 3.49 },
            { name: "Soda", price: 1.99 },
        ],
        deliveryAmount: 5.00, // Delivery fee
    };

    const itemPriceList = document.getElementById("item-price-list");
    const totalAmountDisplay = document.getElementById("total-amount");
    const deliveryAmountDisplay = document.getElementById("delivery-amount");

    function populateOrder() {
        let total = 0;

        order.items.forEach(item => {
            const itemLi = document.createElement("li");

            const priceDiv = document.createElement("div");
            priceDiv.className = "price";
            priceDiv.textContent = `$${item.price.toFixed(2)}`;

            const itemDiv = document.createElement("div");
            itemDiv.className = "item";
            itemDiv.textContent = item.name;

            itemLi.appendChild(itemDiv);
            itemLi.appendChild(priceDiv);
            itemPriceList.appendChild(itemLi);

            total += item.price;
        });

        const totalAmount = total + order.deliveryAmount;
        totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
        deliveryAmountDisplay.textContent = `$${order.deliveryAmount.toFixed(2)}`;
    }

    populateOrder();
});