document.addEventListener("DOMContentLoaded", function () {
    const orders = [
        {
            id: 1,
            customerName: "John Doe",
            shopName: "ENZO",
            address: "Q Block",
            items: "Sandwich",
        },
        {
            id: 2,
            customerName: "Jane Smith",
            shopName: "KC Foods",
            address: "N Block",
            items: "Chole Bhature",
        },
        {
            id: 3,
            customerName: "Emily Johnson",
            shopName: "Enzo",
            address: "P Block",
            items: "Pepsi",
        },
    ];

    const ordersTableBody = document.querySelector("#orders-table tbody");

    function populateOrders() {
        orders.forEach(order => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${order.id}</td>
                <td>${order.customerName}</td>
                <td>${order.shopName}</td>
                <td>${order.address}</td>
                <td>${order.items}</td>
                <td>
                    <button onclick="acceptOrder(${order.id})">Accept</button>
                </td>
            `;
            ordersTableBody.appendChild(row);
        });
    }

    window.acceptOrder = function (orderId) {
        const order = orders.find(o => o.id === orderId);
        if (order) {
            alert(`Order accepted for: ${order.customerName} from ${order.shopName}`);
            // Add further functionality to handle order acceptance
            window.location.href = "index.html";
        }
    };

    populateOrders();
});