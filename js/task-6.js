const controls = document.querySelector('#controls');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

const size = 20; 

createButton.addEventListener('click', () => {
  const input = controls.querySelector('input[type="number"]');
  const amount = parseInt(input.value, 10);

  if (isNaN(amount) || amount <= 0 || amount > 100) {
    alert('Please enter a valid number between 1 and 100');
    return;
  }

  createBoxes(amount);
  input.value = ''; 
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  boxes.innerHTML = ''; 

  const elements = [];
  let size = 30; 

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor(); 
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = color;
    box.style.margin = '5px';
    elements.push(box);
    size += 10; 
  }  boxes.append(...elements);
};

function destroyBoxes() {
  boxes.innerHTML = '';
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};