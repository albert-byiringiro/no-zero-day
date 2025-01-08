const display = document.getElementById('display')
const digits = document.querySelectorAll(".cal-digits")

// Display digits clicked
digits.forEach(digit => {
    digit.addEventListener("click", () => {
        display.value = display.value + digit.value
    })
})
// clear displayed digits
// calculation operations