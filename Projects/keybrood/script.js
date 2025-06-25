// 1. SELECT THE ELEMENTS
const display = document.getElementById('display');
const keyboardContainer = document.getElementById('virtual-keyboard');

// 2. DEFINE THE KEYS AND GENERATE THE KEYBOARD
const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Loop through each character in the 'keys' string
for (const char of keys) {
    // Create a new button element
    const button = document.createElement('button');
    // Set the text of the button to the character
    button.textContent = char;
    // Add a class for styling
    button.classList.add('key');
    // Add the button to our keyboard container
    keyboardContainer.appendChild(button);
}

// 3. USE EVENT DELEGATION TO HANDLE CLICKS
// Add ONE event listener to the parent container
keyboardContainer.addEventListener('click', (event) => {
    // The 'event.target' is the specific element that was clicked
    const clickedElement = event.target;

    // Check if the clicked element is actually a key (and not the space between keys)
    if (clickedElement.classList.contains('key')) {
        // Get the character from the button's text
        const char = clickedElement.textContent;

        // Append the character to the display's value
        display.value += char;
    }
});