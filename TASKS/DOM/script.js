// Select the heading using its ID
const heading = document.getElementById("heading");

// Select the paragraph using its ID
const message = document.getElementById("message");

// Select the image using its ID
const image = document.getElementById("myImage");

// Select the button
const button = document.getElementById("changeBtn");


// Add a click event to the button
button.addEventListener("click", function () {

    // --------------------------------
    // 1. CHANGE CONTENT
    // --------------------------------

    // Change the text inside the heading
    heading.textContent = "Welcome to JavaScript DOM!";

    // Change the paragraph content
    message.textContent = "The content has been changed dynamically.";


    // --------------------------------
    // 2. CHANGE STYLE
    // --------------------------------

    // Change the heading color
    heading.style.color = "blue";

    // Change the paragraph background color
    message.style.backgroundColor = "lightyellow";

    // Change the font size
    message.style.fontSize = "20px";

    // Add some padding
    message.style.padding = "10px";


    // --------------------------------
    // 3. CHANGE ATTRIBUTE
    // --------------------------------

    // Change the image source
    image.setAttribute(
        "src",
        "https://via.placeholder.com/200"
    );

    // Change the image width
    image.setAttribute("width", "200");

});