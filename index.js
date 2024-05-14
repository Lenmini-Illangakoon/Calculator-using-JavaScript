// Get the diplay element
const display = document.getElementById("display");

// Function to append clicked button value to the display
function appendToDisplay(input){
    display.value += input; // Append the clicked value to the display
}

// Function to clear the display
function clearDisplay(){
    display.value = ""; // Clear the display
}

// Function to calculate the result
function calculate(){
    try{
        // Evaluate the expression in the display
        display.value = eval(display.value);
    }
    catch(e){
        // If there's an error, display 'Error'
        display.value = "Error"
    }
}

/**
 * const display = document.getElementById('display');
 * This line gets the HTML element with the ID display and assigns it to the display variable.
 * This element is the input field where the calculator's current value (the numbers and operations being entered, 
 * or the result of a calculation) is shown.
 */

/**
 * .value
 * refers to the text currently shown inside the input field.
 * eg: if the input field contains the number 123, then display.value would be "123"
 */

/**
 * display.value += value;
 * += operator to concatenate the current value of display.value with the new value.
 * shorthand for display.value = display.value + value;
 * value parameter in the appendToDisplay function represents the value of the button that was clicked.
 * This could be a number (1, 2, etc.), an operator (+, -, etc.), or a decimal point (.).
 */