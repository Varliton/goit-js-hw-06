let counterValue = 0;

const decrement = document.querySelector("button[data-action = 'decrement']");
const increment = document.querySelector("button[data-action = 'increment']");
const valueRef = document.querySelector('#value');
 


const onClickDecrease = function ()  {
    counterValue -= 1;
    valueRef.textContent = counterValue;
}

const onClickIncrease = function ()  {
    counterValue += 1;
    valueRef.textContent = counterValue;
}
decrement.addEventListener('click', onClickDecrease);
increment.addEventListener('click', onClickIncrease);