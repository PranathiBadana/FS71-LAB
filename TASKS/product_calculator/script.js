// Select the input elements using their IDs
const productName = document.getElementById("productName");
const quantity = document.getElementById("quantity");
const price = document.getElementById("price");

// Select the result element
const result = document.getElementById("result");


// Function to calculate the total price
function calculateTotal() {

    // Get the quantity entered by the user
    // Number() converts the input value from text to a number
    const quantityValue = Number(quantity.value);

    // Get the price entered by the user
    const priceValue = Number(price.value);


    // Calculate total price
    const total = quantityValue * priceValue;


    // Display the calculated total on the webpage
    result.textContent = "Total Price: ₹" + total.toFixed(2);
}


// Event listener for quantity
// Whenever the quantity changes, calculateTotal() is called
quantity.addEventListener("input", calculateTotal);


// Event listener for price
// Whenever the price changes, calculateTotal() is called
price.addEventListener("input", calculateTotal);