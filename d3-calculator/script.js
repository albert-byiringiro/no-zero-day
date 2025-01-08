const display = document.getElementById('display')
const digits = document.querySelectorAll(".cal-digits")
const clear = document.querySelector(".cal-clear")
const operations = document.querySelectorAll(".cal-operation")

// Handler variables
const handlerVariables = {
    firstCache: "",
    secondCache: "",
    activeOperation: ""
}

// Helper functions
const clearAll = () => {
    display.value = ""
}

const addOperation = () => {
    handlerVariables.firstCache = parseFloat(display.value)
    handlerVariables.activeOperation = "+"
    clearAll()
}

const substractOperation = () => {
    handlerVariables.firstCache = parseFloat(display.value)
    handlerVariables.activeOperation = "-"
    clearAll()
}

const multiplicationOperation = () => {
    handlerVariables.firstCache = parseFloat(display.value)
    handlerVariables.activeOperation = "x"
    clearAll()
}

const divisionOperation = () => {
    handlerVariables.firstCache = parseFloat(display.value)
    handlerVariables.activeOperation = "/"
    clearAll()
}

const percentageOperation = () => {
    handlerVariables.firstCache = parseFloat(display.value)
    clearAll()
    display.value = firstCache / 100
}

const sumOperation = () => {
    if (!handlerVariables.firstCache || !display.value) {
        console.log("Operation not allowed")
        return
    }

    handlerVariables.secondCache = parseFloat(display.value)

    if (handlerVariables.activeOperation === "+") {
        display.value = handlerVariables.firstCache + handlerVariables.secondCache

        handlerVariables.firstCache = display.value
        handlerVariables.secondCache = ""
    } else if (handlerVariables.activeOperation === "-") {
        display.value = handlerVariables.firstCache - handlerVariables.secondCache

        handlerVariables.firstCache = display.value
        handlerVariables.secondCache = ""
    } else if (handlerVariables.activeOperation === "x") {
        display.value = handlerVariables.firstCache * handlerVariables.secondCache

        handlerVariables.firstCache = display.value
        handlerVariables.secondCache = ""
    } else if (handlerVariables.activeOperation === '/') {
        display.value = handlerVariables.firstCache / handlerVariables.secondCache

        handlerVariables.firstCache = display.value
        handlerVariables.secondCache = ""
    }
}

// Event Listeners
digits.forEach(digit => {
    digit.addEventListener("click", () => {
        if (display.value.length >= 8) {
            return
        }

        display.value = display.value + digit.value
    })
})

clear.addEventListener('click', clearAll)

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