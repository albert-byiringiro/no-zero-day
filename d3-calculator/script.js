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
    firstCache = parseFloat(display.value)
    activeOperation = "+"
    clearAll()
}

const substractOperation = () => {
    firstCache = parseFloat(display.value)
    activeOperation = "-"
    clearAll()
}

const multiplicationOperation = () => {
    firstCache = parseFloat(display.value)
    activeOperation = "x"
    clearAll()
}

const divisionOperation = () => {
    firstCache = parseFloat(display.value)
    activeOperation = "/"
    clearAll()
}

const percentageOperation = () => {
    firstCache = parseFloat(display.value)
    clearAll()
    display.value = firstCache / 100
}

const sumOperation = () => {
    if (!firstCache || !display.value) {
        console.log("Operation not allowed")
        return
    }

    secondCache = parseFloat(display.value)

    if (activeOperation === "+") {
        display.value = firstCache + secondCache

        firstCache = display.value
        secondCache = ""
    } else if (activeOperation === "-") {
        display.value = firstCache - secondCache

        firstCache = display.value
        secondCache = ""
    } else if (activeOperation === "x") {
        display.value = firstCache * secondCache

        firstCache = display.value
        secondCache = ""
    } else if (activeOperation === '/') {
        display.value = firstCache / secondCache

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
        } else if (operation.value === "-") {
            substractOperation()
        } else if (operation.value === "x") {
            multiplicationOperation()
        } else if (operation.value === "/") {
            divisionOperation()
        } else if (operation.value === "%") {
            percentageOperation()
        }
    })
})