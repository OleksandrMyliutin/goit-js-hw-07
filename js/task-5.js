const button = document.querySelector('.change-color');
button.addEventListener('click', onButtonClick);
const color = document.querySelector('.color');

function onButtonClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = document.body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
