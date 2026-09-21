// Select the input box using its ID
const taskInput = document.getElementById("taskInput");

// Select the Add Task button
const addBtn = document.getElementById("addBtn");

// Select the <ul> where tasks will be added
const taskList = document.getElementById("taskList");

// Select the message that says "No tasks available"
const emptyMessage = document.getElementById("emptyMessage");


// Add an event listener to the Add Task button
// This function runs whenever the button is clicked
addBtn.addEventListener("click", function () {

    // Get the value entered by the user
    const task = taskInput.value.trim();


    // Check if the input box is empty
    if (task === "") {
        alert("Please enter a task.");
        return;
    }


    // Create a new <li> element
    // This will represent one task
    const li = document.createElement("li");


    // Create a <span> element for the task text
    const taskText = document.createElement("span");

    // Put the entered task inside the span
    taskText.textContent = task;

    // Add a class to the span
    taskText.className = "taskText";


    // Create the Complete button
    const completeBtn = document.createElement("button");

    // Set button text
    completeBtn.textContent = "Complete";

    // Add CSS class
    completeBtn.className = "completeBtn";


    // Create the Delete button
    const deleteBtn = document.createElement("button");

    // Set button text
    deleteBtn.textContent = "Delete";

    // Add CSS class
    deleteBtn.className = "deleteBtn";


    // Add the task text to the <li>
    li.appendChild(taskText);

    // Add Complete button to the <li>
    li.appendChild(completeBtn);

    // Add Delete button to the <li>
    li.appendChild(deleteBtn);


    // Add the complete task to the task list
    taskList.appendChild(li);


    // Add event listener to Complete button
    completeBtn.addEventListener("click", function () {

        // Add or remove the "completed" CSS class
        // This creates the line-through effect
        taskText.classList.toggle("completed");

    });


    // Add event listener to Delete button
    deleteBtn.addEventListener("click", function () {

        // Remove the complete <li> element from the list
        li.remove();

        // Check whether there are any tasks left
        checkEmptyList();

    });


    // Clear the input box after adding the task
    taskInput.value = "";

    // Hide the "No tasks available" message
    emptyMessage.style.display = "none";

});


// Function to check whether the task list is empty
function checkEmptyList() {

    // If there are no <li> elements
    if (taskList.children.length === 0) {

        // Show the empty message
        emptyMessage.style.display = "block";

    } else {

        // Hide the empty message
        emptyMessage.style.display = "none";
    }
}