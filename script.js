// script.js

// Function to greet the user
function greet() {
    let name = prompt("Enter your name:");
    if (name) {
        alert(`Hello, ${name}! Welcome to my JavaScript page.`);
    } else {
        alert("Hello! Welcome to my JavaScript page.");
    }
}

// Event listener for a button click to trigger the greet function
document.getElementById('greetButton').addEventListener('click', greet);
