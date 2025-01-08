const display = document.getElementById('display')
const digits = document.querySelectorAll(".cal-digits")

// Display digits clicked
digits.forEach(digit => {
    digit.addEventListener("click", () => {
        if (display.value.length >= 8) {
            return
        }

        display.value = display.value + digit.value
    })
})
// clear displayed digits
// calculation operations