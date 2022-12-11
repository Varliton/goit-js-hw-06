const bodyRef = document.querySelector('body');
const colorRef = document.querySelector('.color');
const buttonRef = document.querySelector('.change-color');
buttonRef.addEventListener('click', onBackgroundColorChange)
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function onBackgroundColorChange(event) {
  event.preventDefault();
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorRef.textContent = getRandomHexColor()
}