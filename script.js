// Accessing and defining variables
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button"); // Corrected selector
const operators = ["%", "*", "/", "-", "+", "="];
let output = "";

// Defining function to calculate based on the button clicked
const calculate = (btnValue) => {
  display.focus();

  if (btnValue === "=" && output !== "") {
    // Evaluate the expression and handle percentage
    try {
      output = eval(output.replace("%", "/100"));
    } catch (error) {
      output = "Error"; // Handle any potential errors
    }
  } else if (btnValue === "AC") {
    output = ""; // Clear the display when AC is pressed
  } else if (btnValue === "DEL") {
    // If delete button is clicked, remove the last character from output
    output = output.toString().slice(0, -1);
  } else {
    // Prevent consecutive operators or starting with an operator
    if (output === "" && operators.includes(btnValue)) return;
    output += btnValue;
  }

  // Update display value
  display.value = output;
};

// Adding event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
