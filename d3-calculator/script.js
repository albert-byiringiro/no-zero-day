const display = document.getElementById('display')
const digits = document.querySelectorAll(".cal-digits")
const clear = document.querySelector(".cal-clear")
const operations = document.querySelectorAll(".cal-operation")
const clearAllBtn = document.querySelector('.cal-clear-all')

// Handler variables
const handlerVariables = {
    firstCache: "",
    secondCache: "",
    activeOperation: ""
}

// Helper functions
const clearDisplayValue = () => {
    display.value = ""
}

const clearAllOp = () => {
    handlerVariables.activeOperation = ""
    handlerVariables.firstCache = ""
    handlerVariables.secondCache = ""
    display.value = 0
}

const clearLatestOp = () => {
    if (handlerVariables.activeOperation) {
        handlerVariables.activeOperation = ""
        display.value = handlerVariables.firstCache
        return
    }

    display.value = 0
    handlerVariables.firstCache = ""
}

const addOperation = () => {
    handlerVariables.firstCache = parseFloat(display.value)
    handlerVariables.activeOperation = "+"
    clearDisplayValue()
}

const substractOperation = () => {
    handlerVariables.firstCache = parseFloat(display.value)
    handlerVariables.activeOperation = "-"
    clearDisplayValue()
}

const multiplicationOperation = () => {
    handlerVariables.firstCache = parseFloat(display.value)
    handlerVariables.activeOperation = "x"
    clearDisplayValue()
}

const divisionOperation = () => {
    handlerVariables.firstCache = parseFloat(display.value)
    handlerVariables.activeOperation = "/"
    clearDisplayValue()
}

const percentageOperation = () => {
    handlerVariables.firstCache = parseFloat(display.value)
    clearDisplayValue()
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
        handlerVariables.activeOperation = ""
    } else if (handlerVariables.activeOperation === "-") {
        display.value = handlerVariables.firstCache - handlerVariables.secondCache

        handlerVariables.firstCache = display.value
        handlerVariables.secondCache = ""
        handlerVariables.activeOperation = ""
    } else if (handlerVariables.activeOperation === "x") {
        display.value = handlerVariables.firstCache * handlerVariables.secondCache

        handlerVariables.firstCache = display.value
        handlerVariables.secondCache = ""
        handlerVariables.activeOperation = ""
    } else if (handlerVariables.activeOperation === '/') {
        display.value = handlerVariables.firstCache / handlerVariables.secondCache

        handlerVariables.firstCache = display.value
        handlerVariables.secondCache = ""
        handlerVariables.activeOperation = ""
    }
}

// Event Listeners
digits.forEach(digit => {
    digit.addEventListener("click", () => {
        if (display.value.length >= 8) {
            return
        }

        display.value = display.value === "0" ? "" + digit.value : display.value + digit.value
    })
})

clear.addEventListener('click', clearLatestOp)

clearAllBtn.addEventListener('click', clearAllOp)

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