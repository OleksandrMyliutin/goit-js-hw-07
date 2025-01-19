const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', (event) => {
    const trimInput =  event.currentTarget.value.trim();
    if (trimInput === '' ) {
        output.textContent = 'Anonymous';
    }
    else {
        output.textContent = trimInput;
    }
});