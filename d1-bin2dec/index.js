const input = document.querySelector('#binary');
const output = document.querySelector('#output');
const calculate = document.querySelector('#result');

function validateInputBinaryNumbers(inputValue) {
    const splitValue = inputValue.split("");
    return splitValue.every(e => e === '0' || e === '1');
}

calculate.addEventListener('click', () => {
    const inputValue = input.value;

    output.textContent = '';

    if (!validateInputBinaryNumbers(inputValue)) {
        output.textContent = "Input should contain only 1s and 0s.";
        return;
    }

    const decimalValue = parseInt(inputValue, 2);
    output.textContent = `Decimal Value: ${decimalValue}`;
});
