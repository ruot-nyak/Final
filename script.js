// The headline element
const display = document.querySelector("#display");

// The input field for size
const inputSize = document.querySelector("#input-size");
const inputFont = document.querySelector("#select-font");
const inputColor = document.querySelector("#input-color");
const inputBGColor = document.querySelector("#input-bg-color");

// The element that displays the value
const showSize = document.querySelector("#show-size");
const showFont = document.querySelector("#show-font");
const showColor = document.querySelector("#show-color");
const showBGColor = document.querySelector("#show-bg-color");
// Repeat this for the input and "show" elements

innerHTML = "#display";

function handleInput() {
  // get the font size:
  const fontSize = inputSize.value + "px";
  const font = inputFont.value;
  const color = inputColor.value;
  const BGColor = inputBGColor.value;
  // Set the style
  display.style.fontSize = fontSize;
  display.style.font = font;
  display.style.color = color;
  display.style.BGColor = BGColor;
  // Show the size
  showSize.innerHTML = fontSize;
  showFont.innerHTML = font;
  showColor.innerHTML = color;
  showBGColor.innerHTML = BGColor;
}

inputSize.addEventListener("input", handleInput);
inputFont.addEventListener("change", handleInput);
inputColor.addEventListener("change", handleInput);
inputBGColor.addEventListener("change", handleInput);
