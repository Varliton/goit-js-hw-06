const inputRef = document.querySelector('#validation-input');

const validNumber = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', (event) => {
    const input = event.currentTarget.value;
    inputRef.classList.add('invalid')
    if (input.length === validNumber) {
      inputRef.classList.replace('invalid', 'valid');
    }
});