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

// Fetch menu items from the backend
async function loadMenu() {
    try {
        const response = await fetch('/api/menu');
        const menuItems = await response.json();  // Assuming the backend sends an array of menu items

        const menuList = document.getElementById('menu-list');
        menuList.innerHTML = '';  // Clear any existing content

        menuItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';

            // Choose symbol based on veg or non-veg type
            const typeSymbol = item.type === "veg"
                ? `<span class="veg-symbol"></span>`  // Veg symbol
                : `<span class="non-veg-symbol"></span>`;  // Non-Veg symbol

            // Create the menu item HTML
            menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="menu-name">${item.name} <span class="menu-type">${typeSymbol}</span></div>
                <div class="menu-price">₹${item.price}</div>
                <button class="add-to-cart-button" data-item="${item.name}" data-price="${item.price}">Add to Cart</button>
            `;

            menuList.appendChild(menuItem);  // Add item to the menu list
        });
    } catch (error) {
        console.error('Error loading menu:', error);
    }
}

// Call the loadMenu function to fetch and display the menu items
loadMenu();
