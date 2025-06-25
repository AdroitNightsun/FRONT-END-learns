const display = document.getElementById("display");
const buttons = document.getElementById("btn-grid");

const validKeys = [
  "right_brack", "left_brack", "percent", "sev", "ei", "ni", 
  "fo", "fi", "si", "one", "too", "thr", "ze", "dec", 
  "divide", "x", "min", "plus"
];

buttons.addEventListener("click", (event) => {
  const clicked = event.target;
  // Only handle clicks on button elements with a valid class
  if (
    clicked.tagName === "BUTTON" &&
    [...clicked.classList].some(cls => validKeys.includes(cls))
  ) {
    const getInsidesOfBtn = clicked.textContent;
    console.log(getInsidesOfBtn);
    display.value += getInsidesOfBtn;
  }
});
