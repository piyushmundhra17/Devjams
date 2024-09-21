const restaurants = [
    {
        name : "ENZO",
        image: "enzo.jpg",
        link: "enzo.html" // Added the link for ENZO
    },
    {
        name: "KC Foods",
        image: "kcfoods.jpg",
        link: "kcfoods.html" // Added link for KC Foods
    },
    {
        name: "Arasan Caterers",
        image: "arasan.jpg"
    },
    {
        name: "DC Canteen",
        image: "dccanteen.jpg"
    },
    {
        name: "Quickbites",
        image: "quickbites.jpg"
    },
    {
        name: "Amul, Foodys",
        image: "amul.png"
    },
    {
        name: "DC Cafe",
        image: "dccafe.jpg"
    },
    {
        name: "Apples Fruit Zone",
        image: "apples.jpg"
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
