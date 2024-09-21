const menuItems = [
    {
        name: "Butter Chicken",
        price: "₹ 950",
        image: "https://via.placeholder.com/100x100.png?text=Butter+Chicken",
        type: "non-veg"
    },
    {
        name: "Paneer Tikka",
        price: "₹ 650",
        image: "https://via.placeholder.com/100x100.png?text=Paneer+Tikka",
        type: "veg"
    },
    {
        name: "Biryani",
        price: "₹ 1200",
        image: "https://via.placeholder.com/100x100.png?text=Biryani",
        type: "non-veg"
    },
    {
        name: "Dal Makhani",
        price: "₹ 700",
        image: "https://via.placeholder.com/100x100.png?text=Dal+Makhani",
        type: "veg"
    },
    {
        name: "Samosa",
        price: "₹ 150",
        image: "https://via.placeholder.com/100x100.png?text=Samosa",
        type: "veg"
    },
    {
        name: "Naan",
        price: "₹ 100",
        image: "https://via.placeholder.com/100x100.png?text=Naan",
        type: "veg"
    },
    {
        name: "Raita",
        price: "₹ 120",
        image: "https://via.placeholder.com/100x100.png?text=Raita",
        type: "veg"
    },
    {
        name: "Gulab Jamun",
        price: "₹ 250",
        image: "https://via.placeholder.com/100x100.png?text=Gulab+Jamun",
        type: "veg"
    }
];

const menuList = document.getElementById('menu-list');

menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
   
    const typeSymbol = item.type === "veg"
        ? `<span class="veg-symbol"></span>`
        : `<span class="non-veg-symbol"></span>`; // Veg symbol or Non-Veg symbol
   
    menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="menu-name">${item.name} <span class="menu-type">${typeSymbol}</span></div>
        <div class="menu-price">${item.price}</div>
        <button class="add-to-cart-button">Add to Cart</button>
    `;
   
    menuList.appendChild(menuItem);
});