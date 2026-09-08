
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 1000000,
        image: "laptop.png"
    },
    {
        id: 2,
        name: "Mobile",
        price: 250000,
        image: "mobile.png"
    },
    {
        id: 3,
        name: "Headphones",
        price: 3000,
        image: "headphone.png"
    },
    {
        id: 4,
        name: "Shoes",
        price: 2500,
        image: "shoes.png"
    },
    {
        id: 5,
        name: "Watch",
        price: 4500,
        image: "watch.png"
    },
    {
        id: 6,
        name: "Camera",
        price: 35000,
        image: "camera.png"
    },
    {
        id: 7,
        name: "Keyboard",
        price: 1800,
        image: "keyboard.png"
    },
    {
        id: 8,
        name: "Mouse",
        price: 1200,
        image: "mouse.png"
    },
    {
    id: 9,
    name: "SmarttV",
    price: 600000,
    image: "smarttv.png"
},
{
    id: 10,
    name: "Tablet",
    price: 28000,
    image: "tablet.png"
},
{
    id: 11,
    name: "Speaker",
    price: 5000,
    image: "speaker.png"
},
{
    id: 12,
    name: "Power Bank",
    price: 1500,
    image: "powerbank.png"
}
];

// Variables
let cartCount = 0;
let totalPrice = 0;

// Get HTML Elements
const productsContainer = document.getElementById("products");
const cartCountDisplay = document.getElementById("count");
const totalPriceDisplay = document.getElementById("total");
const searchBox = document.getElementById("search");

// ===============================
// Display Products
// ===============================
function displayProducts(productArray) {

    productsContainer.innerHTML = "";

    if (productArray.length === 0) {
        productsContainer.innerHTML = `
            <h2>No Products Found!</h2>
        `;
        return;
    }

    productArray.forEach(function(product) {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        `;

        productsContainer.appendChild(card);

    });

}

// ===============================
// Add To Cart
// ===============================
function addToCart(id) {

    const selectedProduct = products.find(function(product) {
        return product.id === id;
    });

    cartCount++;
    totalPrice += selectedProduct.price;

    cartCountDisplay.textContent = cartCount;
    totalPriceDisplay.textContent = totalPrice;

    alert(selectedProduct.name + " added to cart successfully!");

}

// ===============================
// Search Products
// ===============================
searchBox.addEventListener("keyup", function() {

    const text = searchBox.value.toLowerCase();

    const filteredProducts = products.filter(function(product) {

        return product.name.toLowerCase().includes(text);

    });

    displayProducts(filteredProducts);

});

// ===============================
// Show Products When Page Loads
// ===============================
displayProducts(products);
// =======================
// Offer Countdown Timer
// =======================

// Set timer to 2 hours from now
let offerEndTime = new Date().getTime() + (2 * 60 * 60 * 1000);

let timer = setInterval(function () {

    let now = new Date().getTime();

    let distance = offerEndTime - now;

    if (distance <= 0) {

        clearInterval(timer);

        document.getElementById("countdown").innerHTML = "Offer Expired";

        return;
    }

    let hours = Math.floor(distance / (1000 * 60 * 60));

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        hours + "h : " +
        minutes + "m : " +
        seconds + "s";

}, 1000);