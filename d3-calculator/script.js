const display = document.getElementById('display')
const digits = document.querySelectorAll(".cal-digits")
const clear = document.querySelector(".cal-clear")

// [TODO]: Display digits clicked
digits.forEach(digit => {
    digit.addEventListener("click", () => {
        if (display.value.length >= 8) {
            return
        }

        display.value = display.value + digit.value
    })
})

// [TODO]: clear displayed digits
clear.addEventListener('click', () => {
    display.value = ""
})
// [TODO]: Add operation for addition
