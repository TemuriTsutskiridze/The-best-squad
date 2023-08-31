const addButton = document.getElementById("add");
let container = document.querySelector(".container");
const main = document.querySelector(".main");
let list = document.querySelector(".list");

addButton.addEventListener("click", function () {
  document.querySelector(".main-container").style.display = "none";
  let listContainer = document.createElement("li");
  
  {
    document.querySelector(".container").style.display = "block";
    document.getElementById("save").style.opacity = "1";
  }
  if (window.innerWidth >= 768) {
    document.querySelector(".last-div").style.marginTop = "260px";
    document.querySelector(".last-div").style.padding = "20px";
  }
  if (window.innerWidth >= 1440) {
  }
});

console.log(list);

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Save Button Example</title>
// </head>
// <body>
//     <h1>Save Your Name</h1>
//     <input type="text" id="nameInput" placeholder="Enter your name">
//     <button id="saveButton">Save</button>
//     <p id="savedMessage"></p>

//     <script src="script.js"></script>
// </body>
// </html>

// // Get references to HTML elements
// const nameInput = document.getElementById('nameInput');
// const saveButton = document.getElementById('saveButton');
// const savedMessage = document.getElementById('savedMessage');

// // Initialize a variable to store the saved name
// let savedName = '';

// // Add an event listener to the "Save" button
// saveButton.addEventListener('click', function () {
//     // Get the user's input from the input field
//     const newName = nameInput.value;

//     // Check if the input is not empty
//     if (newName.trim() !== '') {
//         // Save the name
//         savedName = newName;

//         // Display a message confirming the save
//         savedMessage.textContent = `Name "${savedName}" saved!`;

//         // Clear the input field
//         nameInput.value = '';
//     } else {
//         // Display an error message if the input is empty
//         savedMessage.textContent = 'Please enter a name before saving.';
//     }
// });
