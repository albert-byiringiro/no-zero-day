const display = document.getElementById('display')
const digits = document.querySelectorAll(".cal-digits")
const clear = document.querySelector(".cal-clear")
const operations = document.querySelectorAll(".cal-operation")

// Handler variables
let firstCache
let secondCache
let summation
let activeOperation

// Helper functions
const clearAll = () => {
    display.value = ""
}

const addOperation = () => {
    firstCache = parseInt(display.value)
    activeOperation = "+"
    clearAll()
}

const sumOperation = () => {
    if (!firstCache || !display.value) {
        console.log("Operation not allowed")
        return
    }

    secondCache = parseInt(display.value)

    if (activeOperation === "+") {
        display.value = firstCache + secondCache

        firstCache = display.value
        secondCache = ""
    }
}

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
clear.addEventListener('click', clearAll)

// [TODO]: Add operation for addition
operations.forEach(operation => {
    operation.addEventListener('click', () => {
        if (operation.value === "+") {
            addOperation()
        } else if (operation.value === "=") {
            sumOperation()
        }
    })
})