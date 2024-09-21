const restaurants = [
    {
        name: "ENZO",
        image: "https://via.placeholder.com/200x150.png?text=Pizza+Palace",
        link: "enzo.html" // Added the link for ENZO
    },
    {
        name: "KC Foods",
        image: "https://via.placeholder.com/200x150.png?text=Sushi+Spot"
    },
    {
        name: "FC Foods",
        image: "https://via.placeholder.com/200x150.png?text=Burger+Haven"
    },
    {
        name: "DC Canteen",
        image: "https://via.placeholder.com/200x150.png?text=Salad+Station"
    },
    {
        name: "DC Cafe",
        image: "https://via.placeholder.com/200x150.png?text=Pasta+Place"
    },
    {
        name: "QuickBites",
        image: "https://via.placeholder.com/200x150.png?text=Taco+Town"
    },
    {
        name: "flora Cafe",
        image: "https://via.placeholder.com/200x150.png?text=Dessert+Delight"
    },
    {
        name: "One Food World",
        image: "https://via.placeholder.com/200x150.png?text=Coffee+Corner"
    }
];

const restaurantList = document.getElementById('restaurant-list');

restaurants.forEach(restaurant => {
    const restaurantItem = document.createElement('div');
    restaurantItem.className = 'restaurant-item';

    // Check if the restaurant has a link, otherwise show the regular button
    let buttonHTML;
    if (restaurant.link) {
        buttonHTML = `<a href="${restaurant.link}" class="order-button">Order Now</a>`;
    } else {
        buttonHTML = `<button class="order-button">Order Now</button>`;
    }

    restaurantItem.innerHTML = `
        <img src="${restaurant.image}" alt="${restaurant.name}">
        <div class="restaurant-name">${restaurant.name}</div>
        ${buttonHTML}
    `;

    restaurantList.appendChild(restaurantItem);
});
