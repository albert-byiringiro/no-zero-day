// get the inputs and validate them: should be 1s or 0s and should only be 8 digits
// function to convert binary to decimal

const input = document.querySelector('#binary')
const output = document.querySelector('.output')
const calculate = document.querySelector('#result')

function validateInputBinaryNumbers(inputValue) {
    const splitValue = inputValue.trim("").split("")
    return splitValue.some(e => Number(e) === 0 || Number(e) === 1)
}

function validateInputBinaryLength(inputValue) {
    return inputValue.length < 8 ? true : false
}

calculate.addEventListener('click', () => {
    const inputValue = input.value;
    output.textContent = inputValue ?? 0
    if (validateInputBinaryNumbers(inputValue)) {
        console.log("Input should contain only 1s and 0s")
    }

    if (!validateInputBinaryLength(inputValue)) {
        console.log("Binary number should be 8")
    }
})
